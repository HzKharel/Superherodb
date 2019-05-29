import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Powerstats from '../layout/pages/Powerstats'
import Biography from '../layout/pages/Biography';
import Appearance from '../layout/pages/Appearance';
import WorkConnections from '../layout/pages/WorkConnections';

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
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer><Powerstats name = {props.hero.name} stats = {props.hero.powerstats} /> </TabContainer>}
      {value === 1 && <TabContainer><Biography name = {props.hero.name} bio = {props.hero.biography}/></TabContainer>}
      {value === 2 && <TabContainer><Appearance image = {props.hero.image} name = {props.hero.name} appear = {props.hero.appearance} /></TabContainer>}
      {value === 3 && <TabContainer><WorkConnections name = {props.hero.name} work = {props.hero.work} connection = {props.hero.connections}/></TabContainer>}
    </div>
  );
}

export default NavTabs;