import { combineReducers } from "redux";
import graduateReducer from "./graduate";
import visitorReducer from "./visitor-mode";

export default combineReducers({ graduateReducer, visitorReducer });
