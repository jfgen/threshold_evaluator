import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

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

export const makeMainRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router> 
    </Provider>
  );
}
