import React from 'react';
import PropTypes from 'prop-types';

export const Selector = (props) => {
    return(
        <div className="selector">
            <label className="selector__label" htmlFor="currencySelect">Enter Threshold</label>
            <select className="selector__field" id="currencySelect" name="currencySelect"
             value={props.value} onChange={props.selectChange} >
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