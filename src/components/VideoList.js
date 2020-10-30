import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const { videos } = props;
    const renderedList = videos.map((video) => <VideoItem video={video} key={video.id} />);
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
