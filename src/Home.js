import React, { Component } from 'react';

import './App.css';

class App extends Component {
  login = () => {
    this.props.auth.login();
  }

  render() {

    return (
      <div className="dashboard">
        <h1 className="dashboard__title">Cryptocurrency Threshold Evaluator (past 24hrs)</h1>
          <div className="notice">
            
            <p className="notice__text">
              Please log in to access our tools.
            </p>
            <button className="notice__button" onClick = {() => {this.login()}} >Log In</button>
          </div>
      </div>
    );
  }
}

export default App;
