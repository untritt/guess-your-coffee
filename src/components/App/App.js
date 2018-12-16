import React, { Component } from "react";
import "./App.css";

import { beverages, ingredients } from "../../digest";
import { isEmptySet, isSubset } from "../../utils/setOperations";

import { ConnectedIngredientController } from "../Container/ConnectedIngredientController";
// import { BeverageList } from "../BeverageList";

export class App extends Component {
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
