import React, { Component } from "react";

import LanguageContext from "../context/LanguageContext";

class Field extends Component {
    static contextType = LanguageContext;

    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    renderText(language) {
        return language === "english" ? "Name" : "Naam";
    }

    render() {
        const { language } = this.context;

        return (
            <div className="ui field">
                <label>{this.renderText(language)}</label>
                <input
                    value={this.state.input}
                    onChange={(e) => this.setState({ input: e.target.value })}
                />
            </div>
        );
    }
}

export default Field;
