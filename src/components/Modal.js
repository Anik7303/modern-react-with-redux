import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    const { title, content, actionBtns, classes, onDismiss } = props;

    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={onDismiss}>
            <div
                className={`ui standard modal visible active ${classes && classes}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="header">{title}</div>
                <div className="content">{content}</div>
                <div className="actions">{actionBtns}</div>
            </div>
        </div>,
        document.getElementById("modal")
    );
};

export default Modal;
