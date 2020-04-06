import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    photoIcon: {
        paddingTop: '5px',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        display: 'none'
    }
}));

export default function Upload(props) {
    const { callback } = props;
    const classes = useStyles();

    return (
        <div className={classes.photoIcon}>
            <input
                accept="image/*"
                className={classes.input}
                id="icon-button-photo"
                onChange={callback}
                type="file"
            />
            <label htmlFor="icon-button-photo">
                <Tooltip title="Upload from computer">
                    <PhotoCameraIcon color="primary" />
                </Tooltip>
            </label>
        </div>
    );
}