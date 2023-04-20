import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import Survey_field from "./Survey_field";

const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Email Subject", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipients List", name: "recipients" },
];

class Survey_form extends Component {
  render_fields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field key={name} component={Survey_field} type="text" label={label} name={name} />
      );
    });
  }
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.render_fields()}
          <div>
            <button className="btn waves-effect waves-light indigo darken-2 left">
              Cancel <i className="material-icons right">close</i>
            </button>
            <button
              className="btn waves-effect waves-light indigo darken-2 right"
              type="submit"
            >
              Submit <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
})(Survey_form);
