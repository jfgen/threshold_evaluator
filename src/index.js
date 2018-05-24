import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

import { Provider } from 'react-redux';


function myReducers(state = { currency: '' }, action) {

    let value;

    switch(action.type) {
        case 'currency': 
            value = action.currency;
            break;

        default: return state;
    }

    return {currency: value};
}

const store = createStore(myReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
window.store = store;

ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('root'));
registerServiceWorker();
