import React, { Component } from "react";
import SliderContainer from "../../containers/SliderContainer";
export default class Powerstats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      powerStats: props.stats,
      name : props.name
    };
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
    return <div>
      <h1 className = "h1-title-style " style = {{fontWeight : 400}}>{this.state.name}</h1>
    {sliders}
    </div>;
  };

  render() {
    return <div>{this.statBuilder()}</div>;
  }
}
