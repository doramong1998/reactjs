import {combineReducers} from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import users from './users';
const appReducers = combineReducers({
    products,
    itemEditing,
    users
});

export default appReducers;