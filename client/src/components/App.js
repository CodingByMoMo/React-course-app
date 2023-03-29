import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

//  Import Actions
import * as actions from "../actions/index.js";

//  import Components
import Header from "./Header.js";
import Landing from "./Landing.js";
const Dashboard = () => {
  return <h2>Dashboard</h2>;
};
const Survey_new = () => {
  return <h2>New Survey!</h2>;
};

class App extends Component {
  componentDidMount() {
      this.props.fetch_user();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {/*  Page wrapper  */}
            <Header />
            <div>
              {/*  Page Content wrapper  */}
              <Route exact path={"/"} component={Landing} />
              <Route exact path={"/surveys"} component={Dashboard} />
              <Route exact path={"/surveys/new"} component={Survey_new} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
