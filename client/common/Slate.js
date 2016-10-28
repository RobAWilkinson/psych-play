
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Slate extends Component {
  render() {
    return (
    
    <div className="container">
      <table className="table">
        {Object.keys(this.props.surveys).map(survey => (
          <tr>
            <td>Survey: {survey}</td> 
            <td>{this.props.surveys[survey].responses.length} of {this.props.surveys[survey].trials.length}</td>
            <td><Link to={`/survey/${survey}`}>GOTO</Link></td>
          </tr>
            ))}
      </table>
    </div>
    )
  }
  
}
export default connect(state => state.trial)(Slate);
