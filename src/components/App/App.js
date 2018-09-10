import React, { Component } from "react";
import { bases, beverages, ingredients } from "../../digest";
import { BaseController } from "../BaseController";
import { IngredientsController } from "../IngredientsController";
import { BeveragesMap } from "../BeveragesMap";
import "./App.css";

export class App extends Component {
  state = {
    base: bases.espresso,
    ingredients: {
      foamedMilk: false,
      steamedMilk: false,
      hotChocolate: false,
      hotWater: false,
      iceCream: false
    }
  };
  render() {
    return (
      <div className="App">
        <BaseController selectedBase={this.state.base}>{bases}</BaseController>
        <IngredientsController selectedIngredients={this.state.ingredients}>
          {ingredients}
        </IngredientsController>
        <BeveragesMap
          selectedIngredients={this.state.ingredients}
          selectedBase={this.state.base}
        >
          {beverages}
        </BeveragesMap>
      </div>
    );
  }
}
