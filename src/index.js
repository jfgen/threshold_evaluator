import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

import { Provider } from 'react-redux';

const defaultStates = {
    currency: '',
    threshold: 0,
    apiData: [],
    loading: false,
    error: null
};

function myReducers(state = defaultStates, action) {

    let newState = {
        currency: state.currency,
        threshold: state.threshold,
        apiData: state.apiData,
        loading: state.loading
    }

    switch(action.type) {
        case 'dataLoaded': 
            newState.apiData = action.response;
            newState.loading = false;
            break;

        case 'threshold':
            newState.threshold = action.threshold;
            break;

        case 'loading':
            newState.loading = true;
            newState.currency = action.currency;
            
            break;

        case 'error':
            newState.loading = false;
            newState.error = action.error;

            break;

        default: return newState;
    }

    return newState;
}

const store = createStore(myReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('root'));
registerServiceWorker();
