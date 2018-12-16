import { combineReducers } from "redux";
import ingredients from "./ingredients";
import beverages from "./beverages";

export default combineReducers({ ingredients, beverages });

export const getVisibleIngredientControls = ({ ingredients, beverages }) => [];
