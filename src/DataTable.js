import React from 'react';
import PropTypes from 'prop-types';

export const DataTable = (props) => {
    const renderTable = () => {
        if (props.apiData.length === 0) {
            return "no data";
        }
        let threshold = props.threshold;

        let filteredData = props.apiData.filter((item) => {
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

    return renderTable();
}

DataTable.propTypes = {
    apiData: PropTypes.array,
    threshold: PropTypes.number
}
