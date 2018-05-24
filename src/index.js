import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

import { Provider } from 'react-redux';

function myReducers(state = { currency: '', threshold: 0, apiData: [] }, action) {

    let newState = {
        currency: state.currency,
        threshold: state.threshold,
        apiData: state.apiData
    }

    switch(action.type) {
        case 'currency': 
            newState.currency = action.currency;
            newState.apiData = action.response;
            break;

        case 'threshold':
            newState.threshold = action.threshold;
            break;

        default: return newState;
    }

    return newState;
}

const store = createStore(myReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('root'));
registerServiceWorker();
