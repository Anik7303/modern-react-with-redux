import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return null;
    }
    const { title, description, id } = video;
    return (
        <div>
            <div className="ui embed">
                <iframe src={`https://www.youtube.com/embed/${id}`} title="youtube video player" />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
