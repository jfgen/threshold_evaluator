import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';

const mapStateToProps = (state) => ({
    currency: state.currency,
    threshold: state.threshold,
    apiData: state.apiData,
    loading: state.loading,
    error: state.error
});

const DataTable = (props) => {
    // Check if the data is loading
    if(props.loading) {
        return (
            <img className="spinner" src={"./spinner.gif"} alt="preloader" />
        )
    }
    // Check if the Promise returned an error
    if(props.error) {
        return (
            <p className="error-paragraph">Unfortunately it wasn't possible to get your data, please try again.</p>
        )
    }
    
    // Either the user didn't select a cryptocurrency yet or the search didn't yield any results
    if (props.apiData.length === 0) {
        return (
            <div className="no-data">
            
                <p className="no-data__text">There is no data to show yet, please select the cryptocurrency above.</p>
                <p className="no-data__text">You can enter a threshold to filter the data.</p>
            </div>
        )
    }

    // There's data to show, yay!
    let threshold = props.threshold;

    let filteredData = props.apiData.filter((item) => {
        return item.low >= threshold;
    })

    let rows = filteredData.map((item, index) => {
        let date = DateTime.fromMillis(item.date * 1000);
        let shortDate = date.toLocaleString(DateTime.DATE_SHORT);
        let time = date.toLocaleString(DateTime.TIME_24_SIMPLE);

        return (
            <tr className="datatable__row" key={index}>
                <td className="datatable__cell">{`${shortDate} ${time}`}</td>
                <td className="datatable__cell">{item.high}</td>
                <td className="datatable__cell">{item.low}</td>
                <td className="datatable__cell">{item.volume}</td>
            </tr>
        )
    });

    return (
        <table className="datatable">
            <thead>
                <tr>
                    <th className="datatable__header">time</th>
                    <th className="datatable__header">high</th>
                    <th className="datatable__header">low</th>
                    <th className="datatable__header">volume</th>
                </tr>
            </thead>
            <tbody className="datatable__body">
                {rows}                
            </tbody>
        </table>
    )
}

DataTable.propTypes = {
    apiData: PropTypes.array,
    threshold: PropTypes.number
}

const DataTableConnected = connect(mapStateToProps)(DataTable);

export default DataTableConnected;