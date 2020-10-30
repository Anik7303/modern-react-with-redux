import React from "react";
import "./VideoItem.css";
import { withVideoSelectProp } from "../hoc/context";

const VideoItem = ({ video, onVideoSelect }) => {
    const { title, thumbnails } = video;
    return (
        <div className="item video--item" onClick={() => onVideoSelect(video)}>
            <img className="ui image video--image" src={thumbnails.medium.url} alt={title} />
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    );
};

export default withVideoSelectProp(VideoItem);
