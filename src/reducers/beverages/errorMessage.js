import {
  FETCH_BEVERAGES_REQUEST,
  FETCH_BEVERAGES_FAILURE,
  FETCH_BEVERAGES_SUCCESS
} from "actions";

const errorMessage = (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_BEVERAGES_REQUEST:
    case FETCH_BEVERAGES_SUCCESS:
      return null;
    case FETCH_BEVERAGES_FAILURE:
      return payload.message;
    default:
      return state;
  }
};

export default errorMessage;
