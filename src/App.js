import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchData from './data';

import './App.css';

import {Selector} from './Selector';
import {Threshold} from './Threshold';
import {DataTable} from './DataTable';

const mapStateToProps  = (state) => ({
  currency: state.currency,
  threshold: state.threshold,
  apiData: state.apiData
});


const mapDispatchToProps = (dispatch) => {
  return {

    // Dispatch sends the value on #currencySelect to  myReducers()
    cryptoChangeHandler: (option) => {
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

class App extends Component {

  render() {
    return (
      <div className="dashboard">
        <h1 className="dashboard__title">Cryptocurrency Threshold Evaluator (past 24hrs)</h1>
        <div>
          <div className="dashboard__tools">
            <Selector value={this.props.currency} selectChange={this.props.cryptoChangeHandler}/>
            <Threshold changeHandler={this.props.thresholdHandler} />
          </div>
          <DataTable apiData={this.props.apiData} threshold={this.props.threshold} />

        </div>
      </div>
    );
  }
}

App.propTypes = {
  currency: PropTypes.string,
  threshold: PropTypes.number
}

const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppConnected;
