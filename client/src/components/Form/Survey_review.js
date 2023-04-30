import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import _ from "lodash";
import FIELDS from "./form_fields";
import * as actions from "../../actions";

function Survey_review({ onCancel, formValues, submitSurvey, history }) {
  const review_field_list = _.map(FIELDS, ({ name, label }) => {
    return (
      <div>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col s2"></div>
      <div className="col s8">
        <h5>Please Confirm Your Entries!</h5>
        <div>{review_field_list}</div>
        <button
          className="btn waves-effect waves-light indigo darken-2 left"
          onClick={onCancel}
        >
          Back <i className="material-icons left">chevron_left</i>
        </button>
        <button
          onClick={() => submitSurvey(formValues, history)}
          className="btn waves-effect waves-light indigo darken-2 right"
        >
          Send Survey<i className="material-icons right">send</i>
        </button>
      </div>
      <div className="col s2"></div>
    </div>
  );
}

function map_state_to_props(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(map_state_to_props, actions)(withRouter(Survey_review));
