import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./store";

const element = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(element, document.getElementById("root"));
