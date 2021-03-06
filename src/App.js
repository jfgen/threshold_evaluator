import React, { Component } from 'react';

import './App.css';

import Selector from './Selector';
import Threshold from './Threshold';
import DataTable from './DataTable';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {}
    }
  }

  goTo = (route) => {
    this.props.history.replace(`/${route}`)
  }

  login = () => {
    this.props.auth.login();
  }

  logout = () => {
    this.props.auth.logout();
  }

  render() {
    
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="dashboard">
        {
          isAuthenticated() && ( 
            <div className="topbar">
              <div className="wrapper">
                Welcome,
                <button className="topbar__button" onClick = {() => {this.logout()}}>
                  Log Out
                </button>
              </div>
            </div>
          )
        }
        <h1 className="dashboard__title">Cryptocurrency Threshold Evaluator (past 24hrs)</h1>
          {!isAuthenticated() && ( 
          <div className="notice">
            
            <p className="notice__text">
              Please log in to access our tools.
            </p>
            <button className="notice__button" onClick = {() => {this.login()}} >Log In</button>
          </div>
            )
          } {
            isAuthenticated() && ( 
              <div>
                <div className="dashboard__tools">
                  <Selector />
                  <Threshold />
                </div>
                <DataTable />
              </div>
            )
          }
      </div>
    );
  }
}

export default App;
