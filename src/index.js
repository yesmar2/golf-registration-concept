import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import History from "components/History/History";
import { Provider } from "react-redux";
import Store from "./Store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

ReactDOM.render(
    <Provider store={Store}>
        <Router history={History}>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
