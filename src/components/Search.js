import React, { useState, useEffect, useRef } from "react";
import wikipedia from "../api/wikipedia";

function Search(props) {
    const [term, setTerm] = useState("programming");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const timerId = setTimeout(() => setDebouncedTerm(term), 1000);
        return () => clearTimeout(timerId);
    }, [term]);

    useEffect(() => {
        if (debouncedTerm) {
            (async () => {
                const responce = await wikipedia.get("", { params: { srsearch: debouncedTerm } });
                setResults(responce.data.query.search);
            })();
        }
    }, [debouncedTerm]);

    useEffect(() => {
        setTimeout(() => inputRef.current.focus(), 100);
    }, [inputRef]);

    const renderedList = results.map(({ title, pageid, snippet }) => (
        <div className="item" key={pageid}>
            <div className="content">
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${pageid}`}
                        target="blank"
                        className="ui button"
                    >
                        Go
                    </a>
                </div>
                <div className="header">{title}</div>
                <p dangerouslySetInnerHTML={{ __html: snippet }}></p>
            </div>
        </div>
    ));

    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search..."
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedList}</div>
        </div>
    );
}

export default Search;
