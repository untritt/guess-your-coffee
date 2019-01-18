import { IngredientsController } from "../../IngredientsController";
import { connect } from "react-redux";
import { actions } from "../../../actions";
import { getVisibleIngredients } from "../../../reducers";

const mapStateToProps = state => ({
  visibleIngredients: getVisibleIngredients(state)
});

const mapDispatchToProps = {
  onToggleIngredient: actions.toggleIngredient
};

export const ConnectedIngredientController = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsController);
