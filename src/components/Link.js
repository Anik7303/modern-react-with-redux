import React, { useEffect } from "react";

function Link(props) {
    const { href, children, title } = props;
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, title, href);

        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    };
    return (
        <a className="item" onClick={onClick}>
            {children}
        </a>
    );
}

export default Link;
