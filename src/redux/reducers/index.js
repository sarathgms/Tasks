import { combineReducers } from 'redux';
import commonAction from './commonAction';
import user from './user';

export default combineReducers({
    user,
    commonAction
});