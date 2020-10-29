import React, { Profiler } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { images: [] };
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.setLoadTime = this.setLoadTime.bind(this);
    }

    async onSearchSubmit(term) {
        const response = await unsplash("/search", { params: { query: term } });
        this.setState({ images: response.data.photos.results });
    }

    setLoadTime(args) {
        console.log(args[2]);
    }

    render() {
        return (
            <Profiler id="App" onRender={(...args) => this.setLoadTime({ ...args })}>
                <div className="ui container" style={{ marginTop: "10px" }}>
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <ImageList images={this.state.images} />
                </div>
            </Profiler>
        );
    }
}

export default App;
