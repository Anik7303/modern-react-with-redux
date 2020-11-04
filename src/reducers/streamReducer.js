import _ from "lodash";

import {
    CREATE_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
} from "../actions/types";

const streamReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_STREAM:
        case FETCH_STREAM:
        case EDIT_STREAM:
            return { ...state, [payload.id]: payload };
        case DELETE_STREAM:
            return _.omit(state, payload);
        case FETCH_STREAMS:
            return _.mapKeys(payload, "id");
        default:
            return state;
    }
};

export default streamReducer;
