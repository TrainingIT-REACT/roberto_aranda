import { combineReducers } from "redux";
import albums from "./albumsDuck";
import songs from "./songsDuck";

export default combineReducers({ albums, songs });
