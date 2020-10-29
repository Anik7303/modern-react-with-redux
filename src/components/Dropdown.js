import React, { useState, useEffect, useRef } from "react";

function Dropdown(props) {
    const { selected, onSelectedChanged, options, label } = props;
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const onBodyClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.body.addEventListener("click", onBodyClick);

        return () => {
            document.body.removeEventListener("click", onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option, index) =>
        option.value !== selected.value ? (
            <div className="item" key={option.value} onClick={() => onSelectedChanged(option)}>
                {option.label}
            </div>
        ) : null
    );

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                    ref={dropdownRef}
                    className={`ui selection dropdown ${open ? "visible active" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    <i className="icon dropdown"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? "transition visible" : ""}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
