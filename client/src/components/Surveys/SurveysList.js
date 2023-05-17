import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import SurveyListItem from "./SurveysListItem";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map((survey) => {
      return <SurveyListItem survey={survey}></SurveyListItem>;
    });
  }

  render() {
    return (
      <div>
        <div className="col s2"></div>
        <div className="col s8">
          <ul class="collection"> {this.renderSurveys()}</ul>
        </div>
        <div className="col s2"></div>
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
