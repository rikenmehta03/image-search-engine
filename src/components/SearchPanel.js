import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';

import { makeStyles, fade } from '@material-ui/core/styles';

import Search from '../containers/Search';

const useStyles = makeStyles(theme => ({
    root: {
        width: '50%',
        padding: theme.spacing(2)
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '2px'
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        border: '2px solid ' + fade(theme.palette.common.black, 0.15) 
    },
}));

const SearchPanel = ({ url }) => {
    const classes = useStyles();

    if (url !== '')
        return (
            <Grid item className={classes.root}>
                <Paper elevation={3}>
                    <Grid container spacing={1} direction="row">
                        <Grid item md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={url}
                                />
                            </Card>
                        </Grid>
                        <Grid item md={9}>
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