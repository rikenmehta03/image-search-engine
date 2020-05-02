import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Loading from './Loading';

const useStyles = makeStyles(theme => ({
    root: {
        maxHeight: '35vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        width: '100%'
    },
    results: {
        paddingTop: theme.spacing(1),
        height: '100%'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '2px'
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        display: 'flex'
    },
    paper: {
        padding: theme.spacing(1)
    }
}));

export default ({ data }) => {
    const classes = useStyles();

    if (data)
        return (
            <div className={classes.root}>
                <Typography variant="subtitle1"><b>Label: </b>{data.best_guess_labels[0].label}</Typography>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    className={classes.results}
                    spacing={2}
                >
                    <Grid item sm={6} md={6} lg={6}>
                        <Paper elevation={0} className={classes.paper}>
                            <Typography variant="button">Similar images</Typography>
                            <Divider />
                            <Grid container spacing={1} className={classes.paper}>
                                {
                                    data.visually_similar_images.map((result) => {
                                        return (
                                            <Grid item key={result.url} xs={6} sm={6} md={6}>
                                                <Card className={classes.card}>
                                                    <CardMedia
                                                        className={classes.cardMedia}
                                                        image={result.url}
                                                    />
                                                </Card>
                                            </Grid>
                                        );
                                    })
                                }
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item sm={6} md={6} lg={6}>
                        <Paper elevation={0} className={classes.paper}>
                            <Typography variant="button">Web results</Typography>
                            <Divider />
                            <Grid container spacing={2} className={classes.paper}>
                                {
                                    data.pages_with_matching_images.map((result) => {
                                        return (
                                            <Grid item key={result.url} xs={12} sm={12} md={12}>
                                                <Paper>
                                                    <Grid container spacing={1} direction="row">
                                                        {
                                                            result.full_matching_images.length !== 0 &&
                                                            <Grid item md={3} xs={12}>
                                                                <Card className={classes.card} elevation={0}>
                                                                    <CardMedia
                                                                        className={classes.cardMedia}
                                                                        image={result.full_matching_images[0].url}
                                                                    />
                                                                </Card>
                                                            </Grid>
                                                        }
                                                        <Grid item md={9} xs={12}>
                                                            <div dangerouslySetInnerHTML={{ __html: result.page_title }} />
                                                            <Link href={result.url} target="_blank" variant="body2">{result.url}</Link>
                                                        </Grid>
                                                    </Grid>
                                                </Paper>
                                            </Grid>
                                        );
                                    })
                                }
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div >
        )
    else
        return <Loading/>
}