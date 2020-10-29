import React from "react";
import SearchBar from "./SearchBar";
import youtubeApi from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { VideoSelectContext } from "../hoc/context";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideo: null };
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.formatVideoObj = this.formatVideoObj.bind(this);
        this.onVideoSelect = this.onVideoSelect.bind(this);
    }

    componentDidMount() {
        this.onSearchSubmit("taylor swift");
    }

    formatVideoObj(video) {
        const id = video.id.videoId;
        const { title, description, thumbnails } = video.snippet;
        return {
            id,
            title,
            description,
            thumbnails,
        };
    }

    async onSearchSubmit(term) {
        const response = await youtubeApi.get("/search", { params: { q: term } });
        const list = response.data.items.map((item) => this.formatVideoObj(item));
        this.setState({ videos: list, selectedVideo: list[0] });
    }

    onVideoSelect(video) {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoSelectContext.Provider value={this.onVideoSelect}>
                                <VideoList videos={this.state.videos} />
                            </VideoSelectContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
