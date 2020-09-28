import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles.css";
import "normalize.css";
import { Provider } from "react-redux";
import "material-design-icons/iconfont/material-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { store } from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="container">
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
