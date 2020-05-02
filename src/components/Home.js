import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import ToolBar from './ToolBar';
import Copyright from './Copyright';
import Results from './Results';
import SearchPanel from './SearchPanel';
import AnalyticsContainer from '../containers/AnalyticsContainer';

const drawerWidth = '80%';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    height: '100%'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'auto',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: '-' + drawerWidth,
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
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    overflow: 'hidden'
  },
  drawerPaper: {
    width: drawerWidth,
    overflow: 'hidden'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    minHeight: '45px !important'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

export default ({ search, user, updateAnalyticsQuery, fetchGoogleVision, fetchImsearchResults, clearAnalytics }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = (selectedObject) => {
    updateAnalyticsQuery(selectedObject);
    fetchGoogleVision(selectedObject.url);
    fetchImsearchResults(selectedObject.url);
    setOpen(true);
  };

  const handleDrawerClose = () => {
    clearAnalytics();
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <ToolBar user={user} open={open} drawerWidth={drawerWidth} />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Analytics
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <AnalyticsContainer />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.appBarSpacer} />
        <Grid container className={classes.container} direction="column" justify={search.results.length === 0 && !search.isFetchingResults ? "center" : "flex-start"} alignItems="center">
          {
            <SearchPanel url={search.searchQuery} primary={search.primary} updateAnalyticsQuery={handleDrawerOpen} />
          }
          <Results results={search.results} loading={search.isFetchingResults} updateAnalyticsQuery={handleDrawerOpen} />
        </Grid>
        <Copyright />
      </main>
    </div>
  );
}