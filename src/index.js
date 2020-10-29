import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import ExerciseChildren from "./ExerciseChildren";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    avatar={Faker.image.avatar()}
                    author="Sam"
                    timeAgo="Today at 4:00PM"
                    content="Nice blog post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={Faker.image.avatar()}
                    author="Jane"
                    timeAgo="Today at 2:30PM"
                    content="Nice blog post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    avatar={Faker.image.avatar()}
                    author="Emile"
                    timeAgo="Yesterday at 3:45PM"
                    content="Nice blog post!"
                />
            </ApprovalCard>

            <ExerciseChildren />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
