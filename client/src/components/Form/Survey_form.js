import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { Link } from "react-router-dom";
import Survey_field from "./Survey_field";

const FIELDS = [
  { label: "Survey Title", name: "title", type: "text" },
  { label: "Email Subject", name: "subject", type: "text" },
  { label: "Email Body", name: "body", type: "text" },
  { label: "Recipients List", name: "recipients", type: "textArea" },
];

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
            onSubmit={this.props.handleSubmit((values) => console.log(values))}
          >
            {this.render_fields()}
            <div>
              <Link to="/surveys" className="btn waves-effect waves-light indigo darken-2 left">
                Cancel <i className="material-icons right">close</i>
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

  _.each(FIELDS, (field) => {
    if(!values[field.name]) {
      errors[field.name] = "You must provide a " + field.label;
    }
  })
  

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
})(Survey_form);
