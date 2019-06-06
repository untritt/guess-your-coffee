import {
  FETCH_BEVERAGES_REQUEST,
  FETCH_BEVERAGES_FAILURE,
  FETCH_BEVERAGES_SUCCESS
} from "actions";

const isFetching = (state = false, { type }) => {
  switch (type) {
    case FETCH_BEVERAGES_REQUEST:
      return true;
    case FETCH_BEVERAGES_FAILURE:
    case FETCH_BEVERAGES_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default isFetching;
