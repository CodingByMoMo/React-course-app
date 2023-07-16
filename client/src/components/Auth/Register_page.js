import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth_local } from "../../actions";

class Register_Page extends Component {
  render() {
    return (
    <div className="row">
        <div className="col s0 m1 l1"></div>
        <div className="col s12 m10 l10 row">
          <div className="col s1 m3 l4"></div>
          <div className="col s10 m6 l4 center-align">
            <div className="card indigo center-align">
            </div>
          </div>
          <div className="col s1 m3 l4"></div>
        </div>
        <div className="col s0 m1 l1"></div>
    </div>
    );
  }
}

export default Register_Page;
