import { IngredientsController } from "../../IngredientsController";
import { connect } from "react-redux";
import { actions } from "../../../actions";
import { getIngredients } from "../../../reducers";

const mapStateToProps = state => ({
  ingredients: getIngredients(state)
});

const mapDispatchToProps = {
  onToggleIngredient: actions.toggleIngredient
};

export const ConnectedIngredientController = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsController);
