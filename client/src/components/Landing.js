import React, { Component } from "react";

/**
 * @author CodingByMoMo
 * @description Component Showing some Content on Landing page.
 * @class Landing
 * @extends {Component}
 */
class Landing extends Component {
  render() {
    return (
      <div className="container row center-align">
        <div className="col s12 m12">
          <div className="card large">
            <div className="card-image">
              <img
                alt="Laptop with email app open."
                src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1017&q=80"
              />
            </div>
            <div className="card-content">
              <span className="card-title">Fast Surveys</span>
              <p>
                Easily collect feedback from your customers. All thanks to are
                app that will handle all actions for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
