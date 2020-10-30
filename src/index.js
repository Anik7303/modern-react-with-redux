import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers);

const element = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(element, document.getElementById("root"));
