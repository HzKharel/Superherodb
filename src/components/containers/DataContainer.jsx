import React, { Component } from 'react';
import NavigationBar from '../transaction-layer/NavigationBar'
import { Card } from '@material-ui/core';
//import Slider from '@material-ui/lab/Slider';
export default class DataContainer extends Component{


    render(){
        return(
            <Card className="center card" style={{ marginTop: 20, width: '70%'}}>
                <NavigationBar />
            </Card>
        )
    }
}