import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';


const mapStateToProps  = (state) => ({
  currency: state.currency
});


const mapDispatchToProps = (dispatch) => {
  return {

    // Dispatch sends the value on #currencySelect to  myReducers()
    cryptChangeHandler: (option) => {
      dispatch({
        type: 'currency',
        currency: option.target.value
      });
    }
  }
};

class DashboardView extends Component {
  render() {
    
    return (
      <div className="dashboard__tools">
        <div className="selector">
          <label className="selector__label" for="currencySelect">Enter Threshold</label>
          <select className="selector__field" id="currencySelect" name="currencySelect" value={this.props.currency} onChange={this.props.cryptChangeHandler} >
            <option value="" disabled>Please Choose</option>
            <option value="eth">Etherium(ETH)</option>
            <option value="xmr">Monero(XMR)</option>
            <option value="strat">Stratis(STRAT)</option>
            <option value="lsk">Lisk(LSK)</option>
            <option value="bch">Bitcoin Cash(BCH)</option>
          </select>
        </div>
        <div className="threshold">
          <label className="selector__label" for="threshold">Enter Threshold</label>
          <input type="text" id="threshold" name="threshold" className="threshold__field" placeholder="eg: BTC00,00" />
        </div>
      </div>
    )
  }
}

const DashboardViewConnected = connect(mapStateToProps, mapDispatchToProps)(DashboardView);

class App extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1 className="dashboard__title">Cryptocurrency Threshold Evaluator (past 24hrs)</h1>
        <DashboardViewConnected />
        // TODO: STYLE THE TABLE
        <table className="datatable">
          <tr>
            <td className="datatable__collumn">time</td>
            <td className="datatable__collumn">high</td>
            <td className="datatable__collumn">low</td>
            <td className="datatable__collumn">volume</td>
          </tr>
        </table> 
      </div>
    );
  }
}

export default App;
