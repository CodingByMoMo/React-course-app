import React, { Component } from "react";
import { connect } from "react-redux";
import { Link,withRouter } from "react-router-dom";
import Stripe_billing from "./Stripe";


/**
 * @author CodingByMoMo
 * @description Header of the App with navigation.
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
  /**
   * @description Decides what options in navigation shown to the user.
   * @return {JSX} 
   * @memberof Header
   */
  render_content() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        if (this.props.location.pathname === "/login" || this.props.location.pathname === "/register") {
          return [
            <li key={"1000"}>
              <a href="/">Home</a>
            </li>
          ];
        } else {
        return [
          <li key={"1000"}>
            <a href="/login">Login</a>
          </li>
        ];
      }
      default:
        return [
          <li key={"1001"}><Stripe_billing /></li>,
          <li key={"1003"}>Credits: <span>{this.props.auth.credits}</span></li>,
          <li key={"1002"}><a href="/api/logout">Logout</a></li>,
        ];
    }
  }

  /**
   * @return {JSX} 
   * @memberof Header
   */
  render() {
    console.log(this.props);
    return (
      <nav className="row indigo darken-2">
        <div className="col s1"></div>
        <div className="nav-wrapper col s10">
          <div className="left brand-logo">
            <Link to={this.props.auth ? "/surveys" : "/"}>
              Survey App
            </Link>
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.render_content()}
          </ul>
        </div>
        <div className="col s1"></div>
      </nav>
    );
  }
}

// Map state to component props.
function map_state_to_props({ auth }) {
  return { auth };
}

//  Connect App to the Redux Store.
export default connect(map_state_to_props)(withRouter(Header));
