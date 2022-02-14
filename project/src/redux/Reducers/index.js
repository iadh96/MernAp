import {combineReducers} from 'redux';
import AuthReducer from './Authreducers';
import ProductReducer from './ProductReducer';
import UserReducer from './UserReducer';

const rootreducer= combineReducers({ AuthReducer, ProductReducer, UserReducer});

export default rootreducer;