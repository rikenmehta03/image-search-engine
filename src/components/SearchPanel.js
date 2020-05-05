import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

import Search from '../containers/Search';
import ResultImage from './ResultImage';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
        [theme.breakpoints.down('md') && theme.breakpoints.up('sm')]: {
            width: '80%'
        },
        [theme.breakpoints.up('md')]: {
            width: '60%'
        },
        padding: theme.spacing(2)
    }
}));

const SearchPanel = ({ url, primary, updateAnalyticsQuery }) => {
    const classes = useStyles();
    const result = [{ _id: uuidv4(), url, primary}]
    if (url !== '')
        return (
            <Grid item className={classes.root}>
                <Paper elevation={3}>
                    <Grid container spacing={1} direction="row">
                        <Grid item md={3} xs={12}>
                            <ResultImage result={result} onClickHandler={() => updateAnalyticsQuery(result[0])} />
                        </Grid>
                        <Grid item md={9} xs={12}>
                            <Search />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    else
        return (
            <Grid item className={classes.root}>
                <Search />
            </Grid>
        );
}

export default SearchPanel;