import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { makeStyles, fade } from '@material-ui/core/styles';

import Hover from './Hover';

const useStyles = makeStyles(theme => ({
    card: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        display: 'flex'
    },
    overlay: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: fade(theme.palette.common.black, 0.4),
        height: '100%',
        borderRadius: '4px'
    },
    icon: {
        color: theme.palette.common.white,
        padding: theme.spacing(1)
    }
}));

const OnverlayComponent = ({ onClickHandler }) => {
    const classes = useStyles();
    return (
        <div className={classes.overlay} onClick={onClickHandler}>
            <ImageSearchIcon className={classes.icon} fontSize="large" />
        </div>
    );
}

export default ({ result, onClickHandler }) => {
    const classes = useStyles();

    return (
        <Hover hoverComponent={<OnverlayComponent onClickHandler={onClickHandler} />}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={result[0].url}
                />
            </Card>
        </Hover>
    );
}