import { render } from "@testing-library/react";
import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
    console.log({ ...props });
    const renderList = () => {
        return props.songs.map((song, index) => (
            <div className="item" key={`song-${index}`}>
                <div className="right floated content">
                    <div className="ui button primary" onClick={() => props.selectSong(song)}>
                        Select
                    </div>
                </div>
                <div className="content">{song.title}</div>
            </div>
        ));
    };
    return <div className="ui divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

const mapDispatchToProps = {
    selectSong: selectSong,
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
