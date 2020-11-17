import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import HeaderReducer from './HeaderReducer';

let AllReducers = combineReducers({

    headerPhoto: HeaderReducer,

});

const store = createStore(AllReducers, applyMiddleware(thunkMiddleware));

export default store;
