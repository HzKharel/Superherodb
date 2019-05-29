import React, { Component } from "react";
import SliderContainer from "../../containers/SliderContainer";
export default class Powerstats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerStats: props.stats
    };

    console.log("const: ")
    console.log(this.props.stats)
  }

  statBuilder = () => {
    const sliders = [];
    for (const stat in this.state.powerStats) {
      //if (fruit.match(/^(banana|lemon|mango|pineapple)$/))
      if (!stat.match(/^(id|response|name)$/)) {
        sliders.push(
          <SliderContainer
            key={stat}
            value={parseInt(this.state.powerStats[stat])}
            powerstat={stat}
            id
          />
        );
      }
    }
    return <div>{sliders}</div>;
  };

  render() {
    return <div>{this.statBuilder()}</div>;
  }
}
