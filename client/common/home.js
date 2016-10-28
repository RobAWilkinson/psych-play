import React, { Component } from 'react';
import { connect } from 'react-redux';
import Trial from './Trial';
import { Link } from 'react-router';
import { finishQuestion } from '../actions/index'
import { browserHistory } from 'react-router'

class Home extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate() {
    return true;
  }
  render() {
    let component = null;
    const { trialNumber, params } = this.props;
    const { survey } = params;
    const currentSurvey = this.props.trial.surveys[survey];
    const responseCount = currentSurvey.responses.length;
    if(currentSurvey.trials[responseCount]) {
    return (
      <div>
          <Trial
            question={currentSurvey.trials[responseCount].question}
            answers={currentSurvey.trials[responseCount].answers}
            handleFinish={ data => {
              this.props.dispatch(finishQuestion(survey, data))
            }}
          />
      </div>
    );
    } else {
      browserHistory.push({ path: '/' });
    }
  }
}
export default connect(state => state)(Home)
