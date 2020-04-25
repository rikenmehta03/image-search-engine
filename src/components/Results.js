import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Loading from './Loading';
import ResultImage from './ResultImage';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(2)
    }
}));

export default ({ results, loading, updateAnalyticsQuery }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={1} className={classes.root}>
            {
                loading ?
                    <Loading /> :
                    results.map((result) => {
                        return (
                            <Grid item key={result[0]._id} xs={12} sm={6} md={3}>
                                <ResultImage result={result} onClickHandler={() => updateAnalyticsQuery(result[0])}/>
                            </Grid>
                        );
                    })
            }
        </Grid>
    )
}