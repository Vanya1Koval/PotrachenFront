import appLoad from './reducers/app';
import fetchPosts from './reducers/fetchPosts';
import users from './reducers/users';
import fetchPostsByID from './reducers/profile'
import { combineReducers } from 'redux';



export default combineReducers({
    appLoad: appLoad,
    fetchPosts: fetchPosts,
    users: users,
    fetchPostsByID: fetchPostsByID
});