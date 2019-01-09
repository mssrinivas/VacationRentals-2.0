import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore,  applyMiddleware } from 'redux';
/*import {loginSignup} from './reducers/login_signup.js'
import {placefinder} from './reducers/place_finder.js';
import {tripsboard} from './reducers/trips_board.js';*/
//import {travelerprofile} from './reducers/traveler_profile.js'
import { createLogger } from 'redux-logger';
import RootReducer from "./reducers";
//import reducer from './reducers/index'

const logger = createLogger()
const store = createStore(RootReducer,applyMiddleware(logger))

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
