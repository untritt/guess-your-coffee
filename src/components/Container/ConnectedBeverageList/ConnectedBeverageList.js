import { BeverageList } from "../../BeverageList";
import { connect } from "react-redux";
import { actions } from "../../../actions";
import { getVisibleBeverages } from "../../../reducers";

const mapStateToProps = state => ({
  visibleBeverages: getVisibleBeverages(state)
});

const mapDispatchToProps = {
  onHoverBeverageCard: actions.flipCard
};

export const ConnectedBeverageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BeverageList);
