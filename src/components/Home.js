import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ToolBar from './ToolBar';
import Copyright from './Copyright';
import Results from './Results';
import SearchPanel from './SearchPanel';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '100%'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'auto'
  },
  container: {
    width: '100%',
    paddingBottom: theme.spacing(4),
    minHeight: '89vh'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));

const Home = ({ dispatch, search }) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <ToolBar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container className={classes.container} direction="column" justify={search.results.length === 0 ? "center" : "flex-start"} alignItems="center">
          {
            <SearchPanel url={search.searchQuery} />
          }
          <Results />
        </Grid>
        <Copyright />
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  search: state.search
});

export default connect(
  mapStateToProps
)(Home);