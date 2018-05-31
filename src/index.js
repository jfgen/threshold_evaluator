import React from 'react'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { makeMainRoutes } from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const routes = makeMainRoutes();

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

    switch (action.type) {
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

        default:
            return newState;
    }

    return newState;
}

const store = createStore(myReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
