import React, { Component } from 'react';

import './App.css';

import Selector from './Selector';
import Threshold from './Threshold';
import DataTable from './DataTable';

class App extends Component {

  render() {
    return (
      <div className="dashboard">
        <h1 className="dashboard__title">Cryptocurrency Threshold Evaluator (past 24hrs)</h1>
        <div>
          <div className="dashboard__tools">
            <Selector />
            <Threshold />
          </div>
          <DataTable />

        </div>
      </div>
    );
  }
}

export default App;
