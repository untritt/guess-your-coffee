import React from "react";
import { Overlay } from "../Overlay";
import { CardFace } from "./CardFace";

export class MixBeverageCard extends React.Component {
  state = { isHovered: false };

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { beverage } = this.props;
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <CardFace source={beverage} />
        {this.state.isHovered ? <Overlay content={beverage.details} /> : null}
      </div>
    );
  }
}
