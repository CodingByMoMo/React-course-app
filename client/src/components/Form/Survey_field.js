import React, { Component } from "react";

class Survey_field extends Component {
  render() {
    return (
      <div className="left-align">
        <label>{this.props.label}</label>
        <input {...this.props.input} /> 
        <span className="helper-text red-text" data-error="wrong">{this.props.meta.touched && this.props.meta.error}</span>
      </div>
    );
  }
} 

export default Survey_field;
