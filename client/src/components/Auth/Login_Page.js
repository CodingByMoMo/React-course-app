import React, { Component } from "react";
import { Link } from "react-router-dom";
import G_logo from "../../Assets/G_logo.png";
import "./Login_page.css";

class Login_Page extends Component {
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="container row">
        <div className="col s4 m4"></div>
        <div className="col s4 m4 center-align">
          <div className="card indigo center-align">
            <div className="card-title white-text bold center-align login-title">
              <h3>Welcome back!</h3>
            </div>
            <form onSubmit={this.handleSubmit}>
              <label className="left">Username</label>
              <input type="text" name="username"></input>
              <label className="left">Password</label>
              <input type="password" name="password"></input>
              <input type="submit" className="btn" value="Login"></input>
            </form>

            <div>
              <p className="white-text">
                <h6>or Log with Google</h6>
              </p>
              <Link
                to="/auth/google"
                className="google-button black-text center-align waves-effect waves-light btn-large white"
              >
                <img
                  src={G_logo}
                  alt="Google Logo"
                  className="google-logo left circle"
                ></img>
                <span>Sing with Google</span>
              </Link>
            </div>
          </div>
          <span className="center-align black-text">
            <Link to="/register">Not a user?</Link>
          </span>
        </div>
        <div className="col s4 m4"></div>
      </div>
    );
  }
}

export default Login_Page;
