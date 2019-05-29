import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Powerstats from '../layout/pages/Powerstats'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '70%',
    margin: '0 auto',
    marginTop : '20px'
  },
}));

function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <LinkTab label="Powerstats"/>
          <LinkTab label="Biography"/>
          <LinkTab label="Appearance"/>
          <LinkTab label="Work"/>
          <LinkTab label="Connections"/>
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><Powerstats stats = {props.hero.powerstats} /> </TabContainer>}
      {value === 1 && <TabContainer>Biography</TabContainer>}
      {value === 2 && <TabContainer>Appearance</TabContainer>}
      {value === 3 && <TabContainer>Work</TabContainer>}
      {value === 4 && <TabContainer>Connections</TabContainer>}
    </div>
  );
}

export default NavTabs;