import React, { Fragment, useState } from "react";

function Accordion(props) {
    const { items } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const renderedItems = items.map((item, index) => (
        <Fragment key={`accord-${index}`}>
            <div
                className={`title ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${index === activeIndex ? "active" : ""}`}>{item.content}</div>
        </Fragment>
    ));
    return (
        <div className="ui segment">
            <div className="ui styled accordion fluid">{renderedItems}</div>
        </div>
    );
}

export default Accordion;
