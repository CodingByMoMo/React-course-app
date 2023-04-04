//  Import Libraries.
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { legacy_createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
//  Import files and components.
import App from "./components/App.js";
import reportWebVitals from "./reportWebVitals.js";
import reducers from "./reducers/index.js";
//  Import MaterializeCSS
import "materialize-css/dist/css/materialize.min.css";

//  Create store for Redux
const store = legacy_createStore(reducers, {}, applyMiddleware(reduxThunk));

//  Create A Root DOM element for React to Render.
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

console.log("KEY: ", process.env.REACT_APP_STRIPE_KEY);
console.log("ENV: ", process.env.NODE_ENV);

// Web Vitals library to monitor app performance.
// To start measuring pass "console.log()" as parameter to function below.
reportWebVitals();
