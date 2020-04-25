import React, { useState } from 'react';

import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative'
    },
    overlay: props => ({
        position: 'absolute',
        top: props.top ? props.top : 0,
        left: props.left ? props.left : 0,
        height: props.height ? props.height : '100%',
        width: props.width ? props.width : '100%',
        opacity: 1,
        backgroundColor: fade(theme.palette.common.black, 0.10),
    })
}));

export default (props) => {
    const { children, hoverComponent } = props;
    const classes = useStyles(props);
    const [hoverOpen, setHoverOpen] = useState(false);

    return (
        <div className={classes.root} onMouseEnter={() => setHoverOpen(true)} onMouseLeave={() => setHoverOpen(false)}>
            {children}
            {
                hoverOpen ?
                    <div className={classes.overlay}>
                        {hoverComponent}
                    </div> :
                    ""
            }

        </div>
    );
}