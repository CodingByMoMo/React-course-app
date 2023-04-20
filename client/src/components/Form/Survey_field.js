import React, { Component } from "react";

class Survey_field extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input {...this.props.input} />
      </div>
    );
  }
}

export default Survey_field;
