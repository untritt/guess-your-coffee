import React from "react";
import { Overlay } from "./Overlay";
import { Description } from "./Description";
import { Badge } from "./Badge";

export class BeverageCard extends React.Component {
  state = { isActive: false };

  handleMouseEnter = () => {
    this.setState({ isActive: true });
  };

  handleMouseLeave = () => {
    this.setState({ isActive: false });
  };

  render() {
    const { type, name, img, ingredients, details } = this.props.beverage;
    const isSpecific = type === "mix";

    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={img} alt={name} />
        <h2>{name}</h2>
        {isSpecific ? (
          <React.Fragment>
            <ul>
              {[...ingredients].map(ingredient => (
                <Badge key={ingredient.id} source={ingredient} />
              ))}
            </ul>
            <Overlay content={details} />
          </React.Fragment>
        ) : (
          <Description content={details} />
        )}
      </div>
    );
  }
}
