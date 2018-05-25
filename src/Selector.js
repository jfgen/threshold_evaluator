import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchData from './data';

const mapStateToProps = (state) => ({
    currency: state.currency
});


const mapDispatchToProps = (dispatch) => {
    return {

        // Dispatch sends the value on #currencySelect to  myReducers()
        cryptoChangeHandler: (option) => {
            let selectedCurrency = option.target.value;

            fetchData(selectedCurrency).then(function (response) {
                    dispatch({
                        type: 'currency',
                        currency: selectedCurrency,
                        response
                    });
                })
                .catch(function (error) {
                    console.error(error);
                })
        }
    }
};

const Selector = (props) => {
    return(
        <div className="selector">
            <label className="selector__label" htmlFor="currencySelect">Enter Threshold</label>
            <select
                className="selector__field"
                id="currencySelect"
                name="currencySelect"
                value={props.currency} 
                onChange={props.cryptoChangeHandler}
            >
                <option value="" disabled>Please Choose</option>
                <option value="ETH">Etherium(ETH)</option>
                <option value="XMR">Monero(XMR)</option>
                <option value="STRAT">Stratis(STRAT)</option>
                <option value="LSK">Lisk(LSK)</option>
                <option value="BCH">Bitcoin Cash(BCH)</option>
            </select>
        </div>
    )
}

Selector.propTypes = {
    value: PropTypes.string,
    selectChange: PropTypes.func 
}

const SelectorConnected = connect(mapStateToProps, mapDispatchToProps)(Selector);

export default SelectorConnected;