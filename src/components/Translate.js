import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const languages = [
    {
        label: "Bengali",
        value: "bn",
    },
    {
        label: "English",
        value: "en",
    },
    {
        label: "Afrikaans",
        value: "af",
    },
    {
        label: "Arabic",
        value: "ar",
    },
    {
        label: "Hindi",
        value: "hi",
    },
];

function Translate() {
    const [text, setText] = useState("");
    const [language, setLanguage] = useState(languages[0]);

    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <input
                        type="text"
                        placeholder="Enter text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="field">
                    <Dropdown
                        options={languages}
                        label="Select target Language"
                        selected={language}
                        onSelectedChanged={setLanguage}
                    />
                </div>
                <div className="field">
                    <Convert language={language.value} text={text} />
                </div>
            </div>
        </div>
    );
}

export default Translate;
