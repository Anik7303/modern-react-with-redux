import React, { useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
    const { id: streamId } = props.match.params;
    const { fetchStream, stream, editStream } = props;

    useEffect(() => {
        if (streamId) {
            fetchStream(streamId);
        }
    }, [streamId, fetchStream]);

    const onSubmit = (formValues) => {
        editStream(streamId, formValues);
    };

    return (
        <div>
            <h3>Edit a Stream</h3>
            <StreamForm
                onSubmit={onSubmit}
                initialValues={_.pick(stream, "title", "description")}
            />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return { stream: state.streams[id] };
};

const mapDispatchToProps = { fetchStream, editStream };

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
