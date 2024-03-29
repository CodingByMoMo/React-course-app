import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { Link } from "react-router-dom";
import Survey_field from "./Survey_field";
import validate_emails from "../../utils/validate_emails.js"
import FIELDS from "./form_fields";

class Survey_form extends Component {
  render_fields() {
    return _.map(FIELDS, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          component={Survey_field}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col s2"></div>
        <div className="col s8">
          <form
            onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
          >
            {this.render_fields()}
            <div>
              <Link to="/surveys" className="btn waves-effect waves-light indigo darken-2 left">
                Cancel <i className="material-icons left">close</i>
              </Link>
              <button
                className="btn waves-effect waves-light indigo darken-2 right"
                type="submit"
              >
                Next <i className="material-icons right">chevron_right</i>
              </button>
            </div>
          </form>
        </div>
        <div className="col s2"></div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validate_emails(values.recipients || "");

  _.each(FIELDS, (field) => {
    if(!values[field.name]) {
      errors[field.name] = "You must provide a " + field.label;
    }
  })

  return errors;
}

export default reduxForm({
  form: "surveyForm",
  validate,
  destroyOnUnmount: false,
  enableReinitialize: true
})(Survey_form);
