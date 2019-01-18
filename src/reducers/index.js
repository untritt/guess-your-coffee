import { combineReducers } from "redux";
import ingredients, {
  getAllIngredients,
  getIngredientById,
  hasSelectedIngredients,
  includedSelected
} from "./ingredients";
import beverages, { getPureBeverages, getMixBeverages } from "./beverages";

export default combineReducers({ ingredients, beverages });

export const getVisibleIngredients = state => {
  if (!hasSelectedIngredients(state.ingredients)) {
    return getAllIngredients(state.ingredients);
  }

  const displayedBeverages = getVisibleBeverages(state);

  const ingredients = displayedBeverages.reduce(
    (ingredients, { ingredients: beverageIngredients }) => [
      ...ingredients,
      ...beverageIngredients
    ],
    []
  );

  return [...new Set(ingredients)];
};

export const getVisibleBeverages = state => {
  if (!hasSelectedIngredients(state.ingredients)) {
    return getPureBeverages(state.beverages);
  }
  const mixBeverages = getMixBeverages(state.beverages);

  return mixBeverages
    .filter(({ ingredients }) =>
      includedSelected(state.ingredients, ingredients)
    )
    .map(beverage => ({
      ...beverage,
      ingredients: beverage.ingredients.map(id =>
        getIngredientById(state.ingredients, id)
      )
    }));
};
