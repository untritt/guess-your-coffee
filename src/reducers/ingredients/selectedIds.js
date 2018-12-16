import { TOGGLE_INGREDIENT } from "../../actions";

const selectedIds = (state = [], { type, payload }) => {
  switch (type) {
    case TOGGLE_INGREDIENT:
      return new Set(state).has(payload.id)
        ? state.filter(id => id !== payload.id)
        : [...state, payload.id];
    default:
      return state;
  }
};

export default selectedIds;
