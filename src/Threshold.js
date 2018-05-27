import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Getting redux states and mapping them as props to be consumed by the component
const mapStateToProps = (state) => ({
    threshold: state.threshold
});

// Getting redux dispatchers and mapping them as props to be consumed by the component
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
                className="dashboard__input threshold__field" 
                placeholder="eg: 0,032"
                step="0.001"
                onChange={props.thresholdHandler} 
            />
            <span className="selector__sufix">BTC</span>            
        </div>
    )
}

Threshold.propTypes = {
    threshold: PropTypes.number
}

const ThresholdConnected = connect(mapStateToProps, mapDispatchToProps)(Threshold);

export default ThresholdConnected;