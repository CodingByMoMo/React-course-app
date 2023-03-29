import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render_content() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

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

function map_state_to_props({ auth }) {
  return { auth };
}

export default connect(map_state_to_props)(Header);
