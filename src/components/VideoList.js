import React from "react";
import VideoItem from "./VideoItem";
import { formatVideoObj } from "../utils/utils";

const VideoList = (props) => {
    const videos = props.videos.map((video) => formatVideoObj(video));
    const renderedList = videos.map((video) => <VideoItem video={video} key={video.id} />);
    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
