import { IngredientsController } from "../../IngredientsController";
import { connect } from "react-redux";
import { actions } from "../../../actions";
import { getVisibleIngredientControls } from "../../../reducers";

import { isEmptySet, isSubset } from "../../../utils/setOperations";

const mapStateToProps = state => ({
  visibleIngredientControls: getVisibleIngredientControls(state)
});

const mapDispatchToProps = {
  onToggleIngredientControl: actions.toggleIngredient
};

export const ConnectedIngredientController = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsController);
