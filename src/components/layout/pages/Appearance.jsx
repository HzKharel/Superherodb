import React, { Component } from 'react';

export default class Biography extends Component{

    constructor(props){
        super(props);

        this.state = {
            appear : props.appear,
            name : props.name,
            image : props.image
        }
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className = "column" style = {{height: '90%' , width: '50%'}}>
                    <h1 className = "h1-title-style " style = {{fontWeight : 400}}>{this.state.name}</h1>
                    <h2 className = "h1-title-style">Gender : {this.state.appear['gender']}</h2> 
                    <h2 className = "h1-title-style">Race : {this.state.appear['race']}</h2>
                    <h2 className = "h1-title-style">height : {this.state.appear['height'].join('  /  ')}</h2>
                    <h2 className = "h1-title-style">weight : {this.state.appear['weight'].join('  /  ')}</h2>
                    <h2 className = "h1-title-style">Eye Colour : {this.state.appear['eye-color']}</h2>
                    <h2 className = "h1-title-style">Hair Colour : {this.state.appear['hair-color']}</h2>
                    </div>
                    <div className = "column" style = {{height: '90%' , width: '40%', marginRight :'5%',float: 'right'}}>
                        <div style= {{float: 'right'}}>
                            <img src={this.state.image.url} style= {{height: '65%', width : '65%', marginRight :'5%', float: 'right'}} alt="None Available" ></img>
                        </div>
                      
                        
                    </div>
                </div>
            </div>
        )
    }
}