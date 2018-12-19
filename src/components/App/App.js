import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { ConnectedIngredientController } from "../Container/ConnectedIngredientController";
// import { BeverageList } from "../BeverageList";
import { actions } from "../../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchBeverages();
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <p>Provide present ingredients and</p>
          <h1>Guess name of your coffee</h1>
          <ConnectedIngredientController />
        </div>
        {/* <BeverageList
          source={selectedbeverages}
          highlightedIngredients={this.state.selectedIngredients}
        /> */}
      </React.Fragment>
    );
  }
}

App = connect(
  null,
  {
    fetchBeverages: actions.fetchBeverages
  }
)(App);

export { App };
