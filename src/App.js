import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchData from './data';

import './App.css';


const mapStateToProps  = (state) => ({
  currency: state.currency,
  threshold: state.threshold,
  apiData: state.apiData
});


const mapDispatchToProps = (dispatch) => {
  return {

    // Dispatch sends the value on #currencySelect to  myReducers()
    cryptChangeHandler: (option) => {
      let selectedCurrency = option.target.value;

      fetchData(selectedCurrency).then(function(response) {
        dispatch({
          type: 'currency',
          currency: selectedCurrency,
          response
        });
      })
      .catch(function(error) {
        console.error(error);
      }) 
    },
    thresholdHandler: (input) => {
      dispatch({
        type: 'threshold',
        threshold: Number(input.target.value)
      });
      
    }
  }
};

class DashboardView extends Component {
  renderTable = () => {
    if(this.props.apiData.length === 0) {
      return "no data";
    }
    let threshold = this.props.threshold;

    let filteredData = this.props.apiData.filter((item) => {
      return item.low >= threshold;
    })

    let rows = filteredData.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.date}</td>
          <td>{item.high}</td>
          <td>{item.low}</td>
          <td>{item.volume}</td>
        </tr>
      )
    });

    return (
      <table className="datatable">
        <tbody>
          <tr>
            <td className="datatable__collumn">time</td>
            <td className="datatable__collumn">high</td>
            <td className="datatable__collumn">low</td>
            <td className="datatable__collumn">volume</td>
          </tr>
          {rows}
        </tbody>
      </table> 
    )
  }

  render() {
    return (
      <div>
        <div className="dashboard__tools">
          <div className="selector">
            <label className="selector__label" htmlFor="currencySelect">Enter Threshold</label>
            <select className="selector__field" id="currencySelect" name="currencySelect" value={this.props.currency} onChange={this.props.cryptChangeHandler} >
              <option value="" disabled>Please Choose</option>
              <option value="ETH">Etherium(ETH)</option>
              <option value="XMR">Monero(XMR)</option>
              <option value="STRAT">Stratis(STRAT)</option>
              <option value="LSK">Lisk(LSK)</option>
              <option value="BCH">Bitcoin Cash(BCH)</option>
            </select>
          </div>
          <div className="threshold">
            <label className="selector__label" htmlFor="threshold">Enter Threshold</label>
            <span className="uselector__unit">BTC</span>
            <input type="number" id="threshold" name="threshold" className="threshold__field" placeholder="eg: 00,0032"
              onChange={this.props.thresholdHandler} />
          </div>
        </div>

        {/*TODO: STYLE THE TABLE*/}
        {this.renderTable()}

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
      </div>
    );
  }
}

export default App;
