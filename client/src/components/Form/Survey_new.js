import React, { Component } from "react";
import Survey_form from "./Survey_form";
import Survey_review from "./Survey_review";

class Survey_new extends Component {
  state = {show_review: false};

  render_content() {
    if (!this.state.show_review){
      return <Survey_form onSurveySubmit={() => this.setState({show_review: true})}/>;
    }else{
      return <Survey_review onCancel={() => this.setState({show_review: false})}/>
    } 
  }

  render() {
    return (
      <div className="container row center-align">
        {this.render_content()}
      </div>
    );
  }
}

export default Survey_new;
