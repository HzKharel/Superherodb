import React, { Component } from "react";

export default class WorkConnections extends Component {
  constructor(props) {
    super(props);

    this.state = {
      work: props.work,
      connection : props.connection,
      name: props.name
    };
  }

  render() {

    console.log(this.state.work)
    return (
      <div>
        <h1 className="h1-title-style " style={{ fontWeight: 400 }}>
          {this.state.name}
        </h1>
        <h2 className="h1-title-style">
          Occupation : {this.state.work["occupation"]}
        </h2>
        <h2 className="h1-title-style">Base : {this.state.work["base"]}</h2>
        <hr />
        <h2 className="h1-title-style">Group Affiliation : {this.state.connection["group-affiliation"]}</h2>
        <h2 className="h1-title-style">Relatives : {this.state.connection["relatives"]}</h2>

      </div>
    );
  }
}
