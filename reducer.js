import appLoad from './reducers/app';
import hideBody from './reducers/hideBody';
import users from './reducers/users';
import { combineReducers } from 'redux';



export default combineReducers({
    appLoad: appLoad,
    hideBody: hideBody,
    users: users
});