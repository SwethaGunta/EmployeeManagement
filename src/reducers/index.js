import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    auth: AuthReducer 
        //auth state produced by AuthReducer
})