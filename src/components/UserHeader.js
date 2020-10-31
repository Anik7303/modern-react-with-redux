import React from "react";
import { connect } from "react-redux";

const UserHeader = (props) => {
    const { user } = props;

    return <div className="header">{user?.name}</div>;
};

const mapStateToProps = (state, ownProps) => {
    const user = state.users.find((user) => user.id === ownProps.userId);
    return { user };
};

export default connect(mapStateToProps)(UserHeader);
