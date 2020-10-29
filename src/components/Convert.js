import React, { useState, useEffect } from "react";
import translateApi from "../api/translate";

function Convert(props) {
    const { language, text } = props;
    const [debouncedText, setDebouncedText] = useState(text);
    const [translated, setTranslated] = useState("");

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);
        return () => clearTimeout(timerId);
    }, [text]);

    useEffect(() => {
        if (debouncedText && language) {
            (async () => {
                const { data } = await translateApi.post(
                    "",
                    {},
                    {
                        params: { q: debouncedText, target: language },
                    }
                );
                setTranslated(data.data.translations[0].translatedText);
            })();
        }
    }, [language, debouncedText]);

    return <div className="ui header center aligned">{translated}</div>;
}

export default Convert;
