export const LOAD_INGREDIENTS = "LOAD_INGREDIENTS";
export const LOAD_BEVERAGES = "LOAD_BEVERAGES";
export const TOGGLE_INGREDIENT = "TOGGLE_INGREDIENT";

const loadIngredients = ingredients => ({
  type: LOAD_INGREDIENTS,
  payload: {
    ingredients
  }
});

const loadBeverages = beverages => ({
  type: LOAD_BEVERAGES,
  payload: {
    beverages
  }
});

const toggleIngredient = id => ({
  type: TOGGLE_INGREDIENT,
  id
});

export const actions = {
  loadIngredients,
  loadBeverages,
  toggleIngredient
};
