import React, { Component } from 'react';

export default class Biography extends Component{

    constructor(props){
        super(props);

        this.state = {
            bio : props.bio,
            name : props.name
        }
    }

    render(){
        return (
            <div>
                <h1 className = "h1-title-style " style = {{fontWeight : 400}}>{this.state.name}</h1>
                <h2 className = "h1-title-style">Full Name : {this.state.bio['full-name']}</h2>
                <hr />
                <h3 className = "h1-title-style">Alter-egos : {this.state.bio['alter-egos']}</h3>
                <h3 className = "h1-title-style">Aliases : {this.state.bio['aliases'].join(', ')}</h3>
                <hr />
                <h3 className = "h1-title-style">Place of Birth : {this.state.bio['place-of-birth']}</h3>
                <h3 className = "h1-title-style">First Appearance : {this.state.bio['first-appearance']}</h3>
                <h3 className = "h1-title-style">Alignment : {this.state.bio['alignment']}</h3>
                <hr />
                <h3 className = "h1-title-style">Publisher : {this.state.bio['publisher']}</h3>

            </div>
        )
    }
}