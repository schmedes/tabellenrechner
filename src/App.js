import React, { Component } from 'react';
import './App.css';
import Table from './components/table';
import GameDay from './components/gameday';
import SiteHeader from './components/siteheader';
import { buildTable } from './scripts/buildtable.js';
import { buildSortedTable } from './scripts/sortTable.js';
const football = require('./data/football.json');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {table: buildSortedTable(buildTable(football.rounds)), matchdata: football.rounds};
    this.onGameChange = this.onGameChange.bind(this);
    this.onReset = this.onReset.bind(this);
  }
  onGameChange(newdata) {
    this.setState({table: buildSortedTable(buildTable(newdata)), matchdata: newdata});
  }
  onReset() {
    this.setState({table: buildSortedTable(buildTable(football.rounds)), matchdata: football.rounds});
  }
  render() {
    return (
      <div className="app">
        <SiteHeader reset={this.onReset} />
        <input name="content" id="matches" type="radio" value="matches" defaultChecked/>
        <label htmlFor="matches">Matches</label>
        <input name="content" id="table" type="radio" value="table"/>
        <label htmlFor="table">Table</label>
        <main className="main">
        <GameDay data={this.state.matchdata} change={this.onGameChange} />
        <Table tabledata={this.state.table} />
        </main>
      </div>
    );
  }
}

export default App;
