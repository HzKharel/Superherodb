import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/lab/Slider";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles({
  root: {
    width: "96%",
    padding: "2%",
    marginTop: "10px"
  }
});

const StyledSlider = withStyles({
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid #de235b",
    "&$focused, &:hover": {
      boxShadow: `0px 0px 0px ${8}px ${fade("#de235b", 0.16)}`
    },
    "&$activated": {
      boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade("#de235b", 0.16)}`
    },
    "&$jumped": {
      boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade("#de235b", 0.16)}`
    }
  },
  track: {
    backgroundColor: "#de235b",
    height: 8
  },
  trackAfter: {
    backgroundColor: "#d0d7dc"
  },
  focused: {},
  activated: {},
  jumped: {}
})(Slider);

function CustomizedSlider(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className="row">
        <div className ="column" style={{width: '95%'}}>
          <span className="h1-title-style"><b>{props.powerstat.toUpperCase()}</b></span>
        </div>
        <div className="column" style={{width: '5%'}}>
          <span className="h1-title-style"><b><i>{props.value}</i></b></span>
       </div>
    </div>
      <StyledSlider value={props.value} aria-labelledby="label" />
    </Paper>
  );
}

export default CustomizedSlider;
