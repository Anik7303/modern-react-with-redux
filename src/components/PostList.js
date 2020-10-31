import React, { useEffect } from "react";
import { connect } from "react-redux";

import UserHeader from "./UserHeader";
import { fetchPostsAndUsers } from "../actions";

const PostList = (props) => {
    const { posts, fetchPostsAndUsers } = props;

    useEffect(() => {
        fetchPostsAndUsers();
    }, [fetchPostsAndUsers]);

    const renderList = () =>
        posts.map(({ id, userId, title, body }) => (
            <div className="item" key={id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                    <UserHeader userId={userId} />
                </div>
            </div>
        ));

    return <div className="ui relaxed divided list">{renderList()}</div>;
};

const mapStateToProps = (state) => ({
    posts: state.posts,
});

const mapDispatchToProps = { fetchPostsAndUsers };

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
