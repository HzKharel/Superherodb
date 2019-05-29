import React from 'react';
import Card from '@material-ui/core/Card';
import { blue } from '@material-ui/core/colors';

export default function Header(){

    return (
            <Card className = "center card" style = {{minHeight: 100}}>
            <h1 className = " h1-title-style " style = {{color : blue.A700}} align="center">Superhero Database</h1>
            </Card>
    )

}