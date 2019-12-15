import { combineReducers } from 'redux';
import albums from './albumsDuck';
import songs from './songsDuck';
import user from './userDuck';

export default combineReducers({ albums, songs, user });
