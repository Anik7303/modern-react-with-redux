import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtubeApi from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { VideoSelectContext } from "../hoc/context";

const formatVideoObj = (video) => {
    const id = video.id.videoId;
    const { title, description, thumbnails } = video.snippet;
    return { id, title, description, thumbnails };
};

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onSearchSubmit("Taylor Swift");
    }, []);

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    };

    const onSearchSubmit = async (term) => {
        const response = await youtubeApi.get("/search", { params: { q: term } });
        const list = response.data.items.map((item) => formatVideoObj(item));
        setVideos(list);
        setSelectedVideo(list[0]);
    };

    return (
        <div className="ui container">
            <SearchBar onSubmit={onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoSelectContext.Provider value={onVideoSelect}>
                            <VideoList videos={videos} />
                        </VideoSelectContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
