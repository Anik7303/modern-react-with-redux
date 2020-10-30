import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtubeApi from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { VideoSelectContext } from "../hoc/context";
import { useVideos } from "../hooks/index";
import { formatVideoObj } from "../utils/utils";

const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos("taylor swift");

    useEffect(() => {
        if (videos.length > 0) {
            setSelectedVideo(formatVideoObj(videos[0]));
        }
    }, [videos]);

    return (
        <div className="ui container">
            <SearchBar onSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoSelectContext.Provider value={setSelectedVideo}>
                            <VideoList videos={videos} />
                        </VideoSelectContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
