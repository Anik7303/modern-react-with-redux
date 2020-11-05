import React from "react";

import { withLanguage } from "../context/LanguageContext";

const Button = (props) => {
    const { language } = props;
    const text = language === "english" ? "Submit" : "Voorleggen";

    return <button className="ui primary button">{text}</button>;
};

export default withLanguage(Button);
