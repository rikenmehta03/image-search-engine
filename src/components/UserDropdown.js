import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        borderRadius: '0px'
    },
    content: {
        flex: '1 0 auto',
        paddingBottom: '16px !important'
    },
    large: {
        height: 90,
        width: 90,
        fontSize: '3rem',
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
    },
    button: {
        height: '28px'
    },
    buttons: {
        paddingTop: theme.spacing(1),
        width: "100%"
    },
    divider: {
        width: "100%",
        marginTop: theme.spacing(1)
    }
}));


export default ({ user }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <Grid item>
                        <Grid container justify="center" spacing={2}>
                            <Grid item>
                                <Avatar color="primary" src={user.avatar} className={classes.large}>{user.name[0]}</Avatar>
                            </Grid>
                            <Grid item>
                                <Typography component="h5" variant="h5">
                                    {user.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {user.email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                    <Grid item md={10} className={classes.buttons}>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <Grid item>
                                <Link to="/home">
                                    <Button color="primary" variant="outlined" className={classes.button}>
                                        Index list
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/logout">
                                    <Button color="primary" variant="outlined" className={classes.button}>
                                        Log out
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}