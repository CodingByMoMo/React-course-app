import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper indigo darken-2">
          <a href="/#" className="left brand-logo">
            Survey App
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/auth/google">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
