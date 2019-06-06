import { TOGGLE_INGREDIENT, FETCH_BEVERAGES_SUCCESS } from "actions";

const ingredients = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_BEVERAGES_SUCCESS:
      const { ingredients } = payload.response.entities;
      return Object.keys(ingredients).reduce(
        (newState, id) => ({
          ...newState,
          [id]: { ...ingredients[id], selected: false }
        }),
        {}
      );
    case TOGGLE_INGREDIENT:
      const toogledIngredient = state[payload.id];
      return {
        ...state,
        [payload.id]: {
          ...toogledIngredient,
          selected: !toogledIngredient.selected
        }
      };
    default:
      return state;
  }
};

export default ingredients;

const getSelectedIngredientIds = state =>
  Object.values(state)
    .filter(({ selected }) => selected)
    .map(({ id }) => id);

export const getIngredientById = (state, id) => state[id];

export const getAllIngredients = state => Object.values(state);

export const hasSelectedIngredients = state =>
  getSelectedIngredientIds(state).length !== 0;

export const includedSelected = (state, ingredientIds) => {
  const selectedIngredientIds = getSelectedIngredientIds(state);

  return (
    ingredientIds.reduce(
      (selectedIngredientIds, id) =>
        selectedIngredientIds.filter(
          selectedIngredientId => selectedIngredientId !== id
        ),
      selectedIngredientIds
    ).length === 0
  );
};
