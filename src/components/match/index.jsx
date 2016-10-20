import React, {Component} from 'react';
import './match.css';

export default class Match extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e, score) {
    const data = {
      "date": this.props.data.date,
      "team1": {
        "key": this.props.data.team1.key,
        "name": this.props.data.team1.name,
        "code": this.props.data.team1.code
      },
      "team2": {
        "key": this.props.data.team2.key,
        "name": this.props.data.team2.name,
        "code": this.props.data.team2.code
      },
      "score1": this.props.data.score1 || 0,
      "score2": this.props.data.score2 || 0
    };
    if(score === "score1") {
      data.score1 = parseInt(e.target.value, 10);
    } else {
      data.score2 = parseInt(e.target.value, 10);
    }
    this.props.change(data, this.props.index);
  }


  render() {
    return (
      <div className="match">
        <svg className="match-icon">
        <use xlinkHref={'#' + this.props.data.team1.key} />
        </svg>
        <input className="match-input" type="number" min="0" onChange={(e)=> this.handleChange(e, 'score1')} value={this.props.data.score1 === null ? 0: this.props.data.score1}></input>
        <span className="match-gutter">:</span>
        <input className="match-input" type="number" min="0" onChange={(e)=> this.handleChange(e, 'score2')}  value={this.props.data.score2 === null ? 0: this.props.data.score2}></input>       
        <svg className="match-icon">
        <use xlinkHref={'#' + this.props.data.team2.key} />
        </svg>
      </div>
    );
  }
}
