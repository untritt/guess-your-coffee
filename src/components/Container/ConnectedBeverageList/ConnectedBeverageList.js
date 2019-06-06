import { BeverageList } from "components/BeverageList";
import { connect } from "react-redux";
import { getVisibleBeverages } from "reducers";

const mapStateToProps = state => ({
  visibleBeverages: getVisibleBeverages(state)
});

export const ConnectedBeverageList = connect(mapStateToProps)(BeverageList);
