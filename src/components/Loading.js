import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        height: '100%'
    }
}));

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction="column" justify="center" alignItems="center">
                <CircularProgress/>
            </Grid>
        </div>

    );
}