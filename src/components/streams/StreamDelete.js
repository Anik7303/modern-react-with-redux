import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";

import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = (props) => {
    const { stream, fetchStream, deleteStream } = props;
    const { id: streamId } = props.match.params;

    useEffect(() => {
        if (streamId) {
            fetchStream(streamId);
        }
    }, [streamId, fetchStream]);

    const onConfirmation = () => deleteStream(stream.id);
    const onDismiss = () => history.goBack();

    const renderContent = () => {
        if (props.stream) {
            return `Are you sure you want to delete this stream with title: ${props.stream.title} ?`;
        }
        return "Are you sure you want to delete this stream?";
    };

    const renderActionBtns = () => (
        <Fragment>
            <div className="ui button negative" onClick={onConfirmation}>
                Delete
            </div>
            <div className="ui button" onClick={onDismiss}>
                Cancel
            </div>
        </Fragment>
    );

    return (
        <Modal
            title="Delete Stream"
            content={renderContent()}
            actionBtns={renderActionBtns()}
            classes="tiny"
            onDismiss={onDismiss}
        />
    );
};

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return { stream: state.streams[id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
