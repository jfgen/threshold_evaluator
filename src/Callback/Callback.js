import React, { Component } from 'react';

class Callback extends Component {
  render() {
    return (
      <div className="auth-loading-screen">
        <img className="spinner" src={"./spinner.gif"} alt="preloader" />
      </div>
    );
  }
}

export default Callback;