import React, { Component } from "react";

import LanguageContext from "../context/LanguageContext";

class LanguageSelector extends Component {
    render() {
        const { onLanguageChange } = this.context;
        return (
            <div>
                Select a language:
                <i className="flag us" onClick={() => onLanguageChange("english")} />
                <i className="flag nl" onClick={() => onLanguageChange("dutch")} />
            </div>
        );
    }
}

LanguageSelector.contextType = LanguageContext;

export default LanguageSelector;
