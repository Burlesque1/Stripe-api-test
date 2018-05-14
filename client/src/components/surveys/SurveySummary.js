import React from "react";
import { connect } from "react-redux";

const SurveySummary = (props) => (
  <div className="card darken-1">
    <div className="card-action">
      <div> Total Surveys: {props.state.surveys.length} </div>
      <button className="purple btn-flat right white-text">
        <i className="material-icons">sort</i>
      </button>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  state
})
export default connect(mapStateToProps)(SurveySummary);
