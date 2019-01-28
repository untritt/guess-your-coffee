import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { ConnectedIngredientController } from "../Container/ConnectedIngredientController";
import { ConnectedBeverageList } from "../Container/ConnectedBeverageList";
import { actions } from "../../actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchBeverages();
  }

  render() {
    return (
      <div>
        <header>
          <p>Provide present ingredients and</p>
          <h1>Guess name of your coffee</h1>
          <ConnectedIngredientController />
        </header>
        <ConnectedBeverageList />
      </div>
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
