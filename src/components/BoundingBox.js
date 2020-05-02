import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        display: 'flex'
    },
    overlay: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        position: 'absolute',
        backgroundColor: fade(theme.palette.common.black, 0.40),
        border: '1px solid red',
        borderRadius: '4px',
        color: theme.palette.common.white,
        cursor: 'pointer'
    }
}));


export default ({ url, objects, clickHandler }) => {
    const classes = useStyles();

    const [boxes, setBoxes] = useState([]);

    const getBoxDimensions = (box, scale_h, scale_w) => {
        let x1, x2, y1, y2;
        [x1, y1, x2, y2] = box;
        const top = Math.round(y1 * scale_h);
        const left = Math.round(x1 * scale_w);
        const height = String(Math.round((y2 - y1) * scale_h)) + 'px';
        const width = String(Math.round(x2 - x1) * scale_w) + 'px';
        return { top, left, height, width };
    }

    const handleImageLoad = ({ target }) => {
        const targetHeight = target.offsetHeight;
        const targetWidth = target.offsetWidth;
        const h = target.naturalHeight;
        const w = target.naturalWidth;

        const scale_h = targetHeight * 1.0 / h;
        const scale_w = targetWidth * 1.0 / w;

        setBoxes(objects.map((object, i) => {
            const dims = getBoxDimensions(object.box, scale_h, scale_w);
            return (
                <Button key={'bbox-' + String(i)} className={classes.overlay} style={{ ...dims, zIndex: i }} onClick={() => clickHandler(object)}>
                    <Typography variant="caption">{object.name}</Typography>
                </Button>
            )
        }));
    }

    return (
        <div className={classes.root}>
            <img src={url} alt={url} onLoad={handleImageLoad} />
            {boxes}
        </div>
    );
}