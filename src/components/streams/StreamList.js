import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions";

const StreamList = (props) => {
    const { fetchStreams } = props;

    useEffect(() => {
        fetchStreams();
    }, [fetchStreams]);

    const renderAdmin = (streamId, userId) =>
        userId === props.currentUserId ? (
            <div className="right floated content">
                <Link to={`/streams/edit/${streamId}`} className="ui button tiny primary">
                    <i className="icon edit" />
                    Edit
                </Link>
                <Link to={`/streams/delete/${streamId}`} className="ui button tiny negative">
                    <i className="icon trash" />
                    Delete
                </Link>
            </div>
        ) : null;

    const renderList = () =>
        props.streams.map(
            (({ id, title, description, userId }) => (
                <div key={id} className="item">
                    {renderAdmin(id, userId)}
                    <i className="large middle aligned icon video" />
                    <div className="content">
                        <Link to={`/streams/${id}`} className="header">
                            {title}
                        </Link>
                        <div className="description">{description}</div>
                    </div>
                </div>
            ): null)
        );

    const renderCreate = () =>
        props.isSignedIn ? (
            <div style={{ textAlign: "right" }}>
                <Link to="/streams/new" className="ui button primary">
                    <i className="icon plus" />
                    Create Stream
                </Link>
            </div>
        ) : null;

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">{renderList()}</div>
            {renderCreate()}
        </div>
    );
};

const mapStateToProps = (state) => ({
    streams: Object.values(state.streams),
    ...state.auth,
    currentUserId: state.auth.userId,
});
const mapDispatchToProps = { fetchStreams };

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
