import React from "react";
import Faker from "faker";

const Segment = (props) => {
    const { children } = props;
    return <div className="ui placeholder segment">{children}</div>;
};

export default (props) => {
    return (
        <div>
            <Segment>
                <div className="ui icon header">
                    <i className="pdf file outline icon"></i>
                    No documents are listed for this customer.
                </div>
                <div className="ui primary button"> Add Document</div>
            </Segment>
            <Segment>
                <h4 className="ui header">For Your Information</h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ex fuga eum
                    quibusdam rerum magni error explicabo nihil molestiae? Ut qui, laborum quisquam
                    cumque error impedit iusto fugit asperiores odio temporibus eos accusamus natus
                    nulla laudantium dolor sed laboriosam minima quae corrupti obcaecati fugiat
                    culpa in? Veniam error esse deserunt!
                </p>
            </Segment>
        </div>
    );
};
