import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth_local } from "../../actions";
//Assets
import G_logo from "../../Assets/G_logo.png";
import "./Login_page.css";

class Login_Page extends Component {
  handleSubmit(event) {
    event.preventDefault();
    const credits = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(credits);
    auth_local(credits);
    //Redirect("/");
  }
  render() {
    return (
      <div className="row">
        <div className="col s0 m1 l1"></div>
        <div className="col s12 m10 l10 row">
          <div className="col s1 m3 l4"></div>
          <div className="col s10 m6 l4 center-align">
            <div className="card indigo center-align">
              <div className="card-title white-text bold center-align login-title">
                <h3>Welcome back!</h3>
              </div>
              <div className="red-text indigo-darken-1">{this.props.error}</div>
              <form onSubmit={this.handleSubmit}>
                <label className="left white-text">Username</label>
                <input
                  type="text"
                  name="username"
                  className=" white-text"
                ></input>
                <label className="left white-text">Password</label>
                <input
                  type="password"
                  name="password"
                  className=" white-text"
                ></input>
                <input type="submit" className="btn" value="Login"></input>
              </form>

              <div>
                <h6 className="white-text">or Log with Google</h6>
                <a
                  href="/auth/google"
                  className="google-button black-text center-align waves-effect waves-light btn-large white"
                >
                  <img
                    src={G_logo}
                    alt="Google Logo"
                    className="google-logo left circle"
                  ></img>
                  <span>Sing with Google</span>
                </a>
              </div>
            </div>
            <span className="center-align black-text">
              <Link to="/register">Not a user?</Link>
            </span>
          </div>
          <div className="col s1 m3 l4"></div>
        </div>
        <div className="col s0 m1 l1"></div>
      </div>
    );
  }
}

function mapStateToProps({ error }) {
  return { error };
}

export default connect(mapStateToProps, { auth_local })(Login_Page);