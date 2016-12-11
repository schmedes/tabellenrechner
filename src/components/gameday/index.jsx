import React, {Component} from 'react';
import Match from '../match';
import './gameday.css';

export default class GameDay extends Component {
    constructor(props) {
        super(props);
        this.state = {day: 14};
        this.onMatchChange = this.onMatchChange.bind(this);
        this.changeDay = this.changeDay.bind(this);
    }
    onMatchChange(data, index) {
        this.props.change([...this.props.data.slice(0, this.state.day),
             {"name": this.props.data[this.state.day].name, "matches": this.props.data[this.state.day].matches.slice(0, index).concat(data).concat(this.props.data[this.state.day].matches.slice(index+1, this.props.data[this.state.day].matches.length))},
              ...this.props.data.slice(this.state.day + 1, this.props.data.length)]);
    }
    changeDay(change) {
        if(this.state.day + 1 + change < 35 && this.state.day + 1 + change > 0 ) {
           this.setState({day: this.state.day + change});
        }
    }
    render() {
        return(
            <div className="gameday">
            <div className="gameday-header">
            <button className="gameday-change" onClick={()=> this.changeDay(-1)}><svg className="arrow-back arrow" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" >
    <path d="M22 12l-4-4v3H3v2h15v3z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg></button>
            <span className="gameday-current">Week {this.state.day + 1}</span>
            <button className="gameday-change" onClick={()=> this.changeDay(+1)}><svg className="arrow" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" >
    <path d="M22 12l-4-4v3H3v2h15v3z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg></button></div>
            {
          this.props.data[this.state.day].matches.map((el, ind) =>{
          return <Match key={el.team1.name} change={this.onMatchChange} index={ind} data={el} />
          })
           }
           </div>
        );
    }

}