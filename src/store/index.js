import { createStore, combineReducers } from 'redux';

import peopleReducer from './person.store';

//store gets new state from reducer and 
let reducers = combineReducers({
  people: peopleReducer,
})

export default () => createStore(reducers);