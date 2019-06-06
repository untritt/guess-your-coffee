import { FETCH_BEVERAGES_SUCCESS } from "actions";

const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_BEVERAGES_SUCCESS:
      return payload.response.entities.beverages;
    default:
      return state;
  }
};

export default byId;

export const getBeveragesByType = (state, type) =>
  Object.values(state).filter(beverage => beverage.type === type);
