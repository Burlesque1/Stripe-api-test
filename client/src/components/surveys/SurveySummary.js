import React from "react";
import { connect } from "react-redux";
import * as mapDispatchToProps from '../../actions';

const SurveySummary = ({state, sortBy}) => (
  <div className="card darken-1">
    <div className="card-action">
      <div>
        <button className="purple btn-flat white-text right" 
        onClick={sortBy} >
          <i className="material-icons">sort</i>
        </button>
      </div>
      <div> Total Surveys: {state.surveys.length} </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  state
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveySummary);
