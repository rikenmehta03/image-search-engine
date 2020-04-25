import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import BoundingBox from './BoundingBox';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        height: '100%'
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        overflow: 'auto'
    }
}));


export default ({ data }) => {
    const classes = useStyles();
    const handleClick = (clickedObject) => {
        console.log(clickedObject.name);
    }

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <BoundingBox url={data.url} objects={data.objects} clickHandler={handleClick}/>
            </main>
        </div>
    );
}