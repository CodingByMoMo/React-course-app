import React, { Component } from "react";

class SurveyListItem extends Component {
  render() {
    return (
      <div className="card indigo" key={this.props.survey._id}>
        <div className="card-content white-text">
          <span className="card-title">{this.props.survey.title}</span>
          <p>{this.props.survey.body}</p>
          <p className="right">
            Sent On: {new Date(this.props.survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <a href="#">Yes: {this.props.survey.yes}</a>
          <a href="#">No: {this.props.survey.no}</a>
        </div>
      </div>
    );
  }
}

export default SurveyListItem;
