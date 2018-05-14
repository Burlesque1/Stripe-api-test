import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys, deleteSurvey } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    let res = this.props.surveys;
    res = res.reverse();
    return res.map(survey => {
      return (
        <div className="card darken-1" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <button
              className="pink white-text btn-flat right"
              onClick={() =>
                this.props.deleteSurvey(survey._id, this.props.history)
              }
            >
              Delete
            </button>
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div>{this.renderSurveys()}</div>
      </div>
    );
  }
}

function mapStateToProps({ surveys, filter }) {
  return { surveys, filter };
}

export default connect(mapStateToProps, { fetchSurveys, deleteSurvey })(
  SurveyList
);
