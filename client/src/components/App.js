import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

//  Import Actions
import * as actions from "../actions/index.js";

//  import Components
import Header from "./Header.js";
import Landing from "./Landing.js";
import Dashboard from "./Dashboard.js";
import Survey_new from "./Form/Survey_new.js";

/**
 * @author CodingByMoMo
 * @description Main Component of This Application.
 * @class App
 * @extends {Component}
 */
class App extends Component {
  componentDidMount() {
    //  Fetch user from server when component is loaded.
    this.props.fetch_user();
  }

  //  Render Component.
  render() {
    return (
      <div>
        {/*  React Router */}
        <BrowserRouter>
          <div>
            {/*  Page wrapper  */}
            <Header />
            <div>
              {/*  Page Content wrapper  */}
              <Route exact path={"/"} component={Landing} />
              <Route exact path={"/surveys"} component={Dashboard} />
              <Route path={"/surveys/new"} component={Survey_new} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

//  Connect To the Redux Store.
export default connect(null, actions)(App);
