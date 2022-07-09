import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component
{
  render()
  {
    return (
      this.props.score > -1
        ?
        <tr className="RuleRow RuleRow-disabled">
          <td className="RuleRow-name">{this.props.name}</td>
          <td className="RuleRow-score">{this.props.score}</td>
        </tr >
        :
        <tr className="RuleRow RuleRow-active" onClick={this.props.doScore}>
          <td className="RuleRow-name">{this.props.name}</td>
          <td className="RuleRow-name" style={{ textAlign: "right" }}> {this.props.desc}</td>
        </tr >

    )
  }
}

export default RuleRow;