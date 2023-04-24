import React from "react";

function Survey_review({ onCancel }) {
  return (
    <div className="row">
        <div className="col s2"></div>
        <div className="col s8">
      <h5>Please Confirm your entries</h5>

      <button
        className="btn waves-effect waves-light indigo darken-2 left"
        onClick={onCancel}
      >
        Back <i className="material-icons left">chevron_left</i>
      </button>
      </div>
      <div className="col s2"></div>
    </div>
  );
}

export default Survey_review;
