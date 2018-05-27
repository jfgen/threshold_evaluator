import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    threshold: state.threshold
});

const mapDispatchToProps = (dispatch) => {
    return {

        // Dispatch sends the value on #threshold to myReducers()
        thresholdHandler: (input) => {
            dispatch({
                type: 'threshold',
                threshold: Number(input.target.value)
            });

        }
    }
};

const Threshold = (props) => {
    return(
        <div className="threshold">
            <label className="selector__label" htmlFor="threshold">Enter Threshold</label>
            <input 
                type="number"
                id="threshold"
                name="threshold"
                className="dashboard__input" 
                placeholder="eg: 0,0032"
                step="0.001"
                onChange={props.thresholdHandler} 
            />
            <span className="selector__sufix">BTC</span>            
        </div>
    )
}

Threshold.propTypes = {
    changeHandler: PropTypes.func
}

const ThresholdConnected = connect(mapStateToProps, mapDispatchToProps)(Threshold);

export default ThresholdConnected;