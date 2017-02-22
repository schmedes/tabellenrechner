import React, {Component} from 'react';
import './tableentry.css';

export default class TableEntry extends Component {
  render() {
    return (
      <tr className="table-entry">
        <td className="table-entry__position">{this.props.position + '.'}</td>
        <td className="table-entry__name">
        <svg className="team-icon">
        <use xlinkHref={'#' + this.props.data.key} />
        </svg><span className="table-entry__teamname">{this.props.data.name}</span></td>
        <td className="table-entry__played">{this.props.data.wins + this.props.data.draws + this.props.data.losses}</td>
        <td className="table-entry__wins">{this.props.data.wins}</td>
        <td className="table-entry__drawn">{this.props.data.draws}</td>
        <td className="table-entry__losses">{this.props.data.losses}</td>
        <td className="table-entry__scored">{this.props.data.scored}</td>
        <td className="table-entry__conceded">{this.props.data.conceded}</td>
        <td className="table-entry__difference">{this.props.data.difference}</td>
        <td className="table-entry__points">{this.props.data.points}</td>
      </tr>
    );
  }
}
