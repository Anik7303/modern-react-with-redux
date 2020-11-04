import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import flv from "flv.js";

import { fetchStream } from "../../actions";

const StreamShow = (props) => {
    const { stream, fetchStream } = props;
    const { id: streamId } = props.match.params;

    const videoRef = useRef(null);

    useEffect(() => {
        if (!stream) {
            fetchStream(streamId);
        }
        const player = flv.createPlayer({
            type: "flv",
            url: `http://localhost:8000/live/${streamId}.flv`,
            isLive: true,
        });
        if (stream) {
            player.attachMediaElement(videoRef.current);
            player.load();
        }

        return () => {
            player.destroy();
        };
    }, [stream, streamId, fetchStream]);

    if (!stream) {
        return (
            <div className="ui active dimmer inverted">
                <div className="ui text loader">loading...</div>
            </div>
        );
    }
    const { title, description } = stream;
    return (
        <div>
            <video ref={videoRef} style={{ width: "100%" }} controls />
            <h1>{title}</h1>
            <h4>{description}</h4>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return { stream: state.streams[id] };
};

const mapDispatchToProps = { fetchStream };

export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
