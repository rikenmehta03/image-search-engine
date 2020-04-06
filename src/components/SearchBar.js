import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles, fade } from '@material-ui/core/styles';

import Upload from './Upload';

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        border: '0.5px solid ' + fade(theme.palette.common.black, 0.15),
        borderRadius: theme.shape.borderRadius * 6,
        backgroundColor: fade(theme.palette.common.black, 0.10),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.20),
        },
        marginRight: theme.spacing(1),
        marginLeft: 0,
        width: 'auto',
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'relative',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        transition: theme.transitions.create('width'),
        width: '100%',
        height: '35px',
        color: theme.palette.common.black
    }
}));

export default function SearchBar(props) {
    const { uploadCallback, submitCallback, value = '' } = props;
    const classes = useStyles();
    const [state, setState] = useState({
        query: ''
    });
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon color="primary" />
            </div>
            <InputBase
                fullWidth
                placeholder="type url..."
                defaultValue={value}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                onChange={({ target }) => setState({ ...state, 'query': target.value })}
                onKeyDown={submitCallback}
                autoFocus={true}
            />
            <Upload callback={uploadCallback} />
            <div className={classes.submitIcon} onClick={(event) => submitCallback(event, state.query)}>
                <SendIcon color="primary" />
            </div>
        </div>
    );
}