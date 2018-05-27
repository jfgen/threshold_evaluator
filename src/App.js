import React, { Component } from 'react';

import './App.css';

import Selector from './Selector';
import Threshold from './Threshold';
import DataTable from './DataTable';


class App extends Component {
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
        <div className="topbar">
          Welcome user,
                {
                  !isAuthenticated() && ( 
                    <button onClick = {() => {this.login()}} >
                      Log In 
                    </button>
                  )
                } {
                  isAuthenticated() && ( 
                    <button onClick = {() => {this.logout()}}>
                      Log Out
                    </button>
                  )
                }
        </div>
        <h1 className="dashboard__title">Cryptocurrency Threshold Evaluator (past 24hrs)</h1>
        <div>
          {!isAuthenticated() && ( 
              <button onClick = {() => {this.login()}} >
                Log In 
              </button>
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
      </div>
    );
  }
}

export default App;
