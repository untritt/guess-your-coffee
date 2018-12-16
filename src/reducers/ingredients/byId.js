import { LOAD_INGREDIENTS } from "../../actions";

const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case LOAD_INGREDIENTS:
      return payload.ingredients.reduce(
        (ingredients, ingredient) => (ingredients[ingredient.id] = ingredient),
        {}
      );
    default:
      return state;
  }
};

export default byId;
