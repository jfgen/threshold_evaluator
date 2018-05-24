import React from 'react';
import PropTypes from 'prop-types';


export const Threshold = (props) => {
    return(
        <div className="threshold">
            <label className="selector__label" htmlFor="threshold">Enter Threshold</label>
            <span className="uselector__unit">BTC</span>
            <input type="number" id="threshold" name="threshold" className="threshold__field" placeholder="eg: 00,0032"
            onChange={props.changeHandler} />
        </div>
    )
}

Threshold.propTypes = {
    changeHandler: PropTypes.func
}