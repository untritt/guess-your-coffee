import { combineReducers } from "redux";
import byId from "./byId";
import selectedIds from "./selectedIds";

export default combineReducers({ byId, selectedIds });
