//  Import Libraries.
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware } from "redux";
//  Import files and components.
import App from "./components/App.js";
import reportWebVitals from "./reportWebVitals.js";
import reducers from "./reducers/index.js";

//  Create store for Redux
const store = legacy_createStore(reducers, {}, applyMiddleware());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
