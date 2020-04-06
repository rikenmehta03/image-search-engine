import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        paddingTop: theme.spacing(2)
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      }
}));

const Results = ({ results }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={1} className={classes.root}>
            {
                results.map((result) => {
                    return (
                        <Grid item key={result[0]._id} xs={12} sm={6} md={3}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={result[0].url}
                                />
                            </Card>
                        </Grid>
                    );
                })
            }
        </Grid>
    )
}

const mapStateToProps = state => ({
    results: state.search.results
});

export default connect(
    mapStateToProps
)(Results);