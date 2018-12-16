import { LOAD_BEVERAGES } from "../actions";

const beverages = (state = {}, { type, payload }) => {
  switch (type) {
    case LOAD_BEVERAGES:
      return payload.ingredients.reduce(
        (beverages, beverage) => (beverages[beverage.id] = beverage),
        {}
      );
    default:
      return state;
  }
};

export default beverages;
