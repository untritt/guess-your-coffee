import { combineReducers } from "redux";
import ingredients, {
  getAllIngredients,
  getIngredientById,
  hasSelectedIngredients,
  includedSelected
} from "./ingredients";
import beverages, { getPureBeverages, getMixBeverages } from "./beverages";

export default combineReducers({ ingredients, beverages });

export const getIngredients = state => {
  if (!hasSelectedIngredients(state.ingredients)) {
    return getAllIngredients(state.ingredients).map(ingredient => ({
      ...ingredient,
      enabled: true
    }));
  }

  const ingredients = getAllIngredients(state.ingredients);
  const displayedBeverages = getVisibleBeverages(state);
  const enabledIngredientIds = new Set(
    displayedBeverages.reduce(
      (prevIngredientIds, { ingredients = [] }) => [
        ...prevIngredientIds,
        ...ingredients.map(({ id }) => id)
      ],
      []
    )
  );

  return ingredients.map(ingredient => {
    const enabled = enabledIngredientIds.has(ingredient.id);
    return { ...ingredient, enabled };
  });
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
