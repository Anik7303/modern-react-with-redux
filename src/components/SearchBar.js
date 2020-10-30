import React, { useState, useEffect, useRef } from "react";

const SearchBar = (props) => {
    const [term, setTerm] = useState("");
    const searchRef = useRef(null);

    useEffect(() => {
        const timerId = setTimeout(() => {
            searchRef.current.focus();
        }, 500);
        return () => clearTimeout(timerId);
    }, [searchRef]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(term);
        setTerm("");
    };

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <input
                        ref={searchRef}
                        type="text"
                        placeholder="Search.."
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
