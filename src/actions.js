import { getBeverages } from "./api";

export const FETCH_BEVERAGES_REQUEST = "FETCH_BEVERAGES_REQUEST";
export const FETCH_BEVERAGES_FAILURE = "FETCH_BEVERAGES_FAILURE";
export const FETCH_BEVERAGES_SUCCESS = "FETCH_BEVERAGES_SUCCESS";
export const TOGGLE_INGREDIENT = "TOGGLE_INGREDIENT";

const fetchBeverages = () => dispatch => {
  dispatch({
    type: FETCH_BEVERAGES_REQUEST,
    payload: {}
  });

  getBeverages().then(
    response => {
      dispatch({
        type: FETCH_BEVERAGES_SUCCESS,
        payload: {
          response
        }
      });
    },
    message => {
      dispatch({
        type: FETCH_BEVERAGES_FAILURE,
        payload: {
          message
        }
      });
    }
  );
};

const toggleIngredient = id => ({
  type: TOGGLE_INGREDIENT,
  payload: {
    id
  }
});

export const actions = {
  fetchBeverages,
  toggleIngredient
};
