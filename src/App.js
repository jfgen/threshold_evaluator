import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';


const mapStateToProps  = (state) => ({
  currency: state.currency
});


const mapDispatchToProps = (dispatch) => {
  return {
    cryptChangeHandler: (option) => {
      dispatch({
        type: 'currency',
        currency: option.target.value
      });
    }
  }
};

class CounterView extends Component {
  render() {
    
    return (
      <div>
        <select name="currency" value={this.props.currency} onChange={this.props.cryptChangeHandler}>
          <option value="" disabled>Please Choose</option>
          <option value="lsk">Lisk</option>
          <option value="xmr">Monero</option>
        </select>
        <div> here: {this.props.num}</div>
      </div>
    )
  }
}

const CounterViewConnected = connect(mapStateToProps, mapDispatchToProps)(CounterView);

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterViewConnected /> 
        app will be here
      </div>
    );
  }
}

export default App;
