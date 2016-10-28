
import React, { Component } from 'react';

export default class Trial extends Component {
  componentDidUpdate() {
    console.log('didUpdate');
    const timeline = [{
      type: 'survey-multi-choice',
      questions: [this.props.question],
      options: [this.props.answers],
    }];
    jsPsych.init({
        timeline: timeline,
        display_element: $(this.refs.main),
        on_finish: (data) => {
          this.props.handleFinish(data);
          console.log('done');
        }
    })
  }
  componentDidMount() {
    console.log('didMount');
    const timeline = [{
      type: 'survey-multi-choice',
      questions: [this.props.question],
      options: [this.props.answers],
    }];
    jsPsych.init({
        timeline: timeline,
        display_element: $(this.refs.main),
        on_finish: (data) => {
          console.log('finish');
          this.props.handleFinish(data);
        }
    })
  }
  render() {
    console.log('called');
    return (
      <div>
        <h1>Trial</h1>
        <div ref="main">
        </div>
      </div>
    )
  }
}
