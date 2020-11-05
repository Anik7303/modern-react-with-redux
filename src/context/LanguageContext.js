import React, { createContext, Component } from "react";

const LanguageContext = createContext("english");

export const withLanguage = (Component) => (props) => (
    <LanguageContext.Consumer>
        {(values) => <Component {...props} {...values} />}
    </LanguageContext.Consumer>
);

export class LanguageStore extends Component {
    state = { language: "english" };

    constructor(props) {
        super(props);
        this.onLanguageChange = this.onLanguageChange.bind(this);
    }

    onLanguageChange(language) {
        this.setState({ language });
    }

    render() {
        return (
            <LanguageContext.Provider
                value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
            >
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageContext;
