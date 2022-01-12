import { combineReducers } from "redux";
import { todaysItems } from "../reducers/todaysItems";

const rootReducer = combineReducers({ todaysItems });
export default rootReducer;
