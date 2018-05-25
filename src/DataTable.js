import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    currency: state.currency,
    threshold: state.threshold,
    apiData: state.apiData
});


const DataTable = (props) => {
    if (props.apiData.length === 0) {
        return (
            <div className="no-data">
                <p className="no-data__text">There is no data to show yet, please select the cryptocurrency above.</p>
                <p className="no-data__text">You can enter a threshold to filter the data.</p>
            </div>
        )
    }
    let threshold = props.threshold;

    let filteredData = props.apiData.filter((item) => {
        return item.low >= threshold;
    })

    let rows = filteredData.map((item, index) => {
        //let date = new Date(item.date * 1000);

        return (
            <tr className="datatable__row" key={index}>
                <td className="datatable__cell">{item.date}</td>
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
                {rows}
            </thead>
        </table>
    )

}

DataTable.propTypes = {
    apiData: PropTypes.array,
    threshold: PropTypes.number
}

const DataTableConnected = connect(mapStateToProps)(DataTable);

export default DataTableConnected;