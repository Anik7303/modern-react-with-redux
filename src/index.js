import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import SeasonDetail from "./SeasonDetail";
import Spinner from "./Spinner";

class App extends React.Component {
    state = { lat: null, errorMessage: "" };

    constructor(props) {
        super(props);

        this.renderContent = this.renderContent.bind(this);
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (error) => console.error({ error })
        );
    }

    renderContent() {
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDetail lat={this.state.lat} />;
        }
        if (this.state.errorMessage && !this.state.lat) {
            return <div>{this.state.errorMessage}</div>;
        }
        return <Spinner message="Please give location permission" />;
    }

    render() {
        console.log({ ...this.state });
        return <div>{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
