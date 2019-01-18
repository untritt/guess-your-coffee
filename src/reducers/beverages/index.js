import { combineReducers } from "redux";
import isFetching from "./isFetching";
import errorMessage from "./errorMessage";
import byId, { getBeveragesByType } from "./byId";

export default combineReducers({
  byId,
  isFetching,
  errorMessage
});

export const getBeverage = (state, id) => state.byId[id];
export const getPureBeverages = state => getBeveragesByType(state.byId, "pure");
export const getMixBeverages = state => getBeveragesByType(state.byId, "mix");
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
