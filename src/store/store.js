import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  { currentVideo: exampleVideoData[0], videoList: exampleVideoData },
  composeEnhancers(applyMiddleware(thunk)));

console.log('step 0 store.js: ', exampleVideoData, 'state: ', store.getState(), 'store: ', store);

export default store;