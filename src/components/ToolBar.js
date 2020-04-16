import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Popover from '@material-ui/core/Popover';
import { blue } from '@material-ui/core/colors';

import logo from '../logo-white.png';
import UserDropdown from './UserDropdown';


const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 25,
        paddingRight: 8
    },
    avatar: {
        paddingLeft: theme.spacing(1)
    },
    blue: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
    },
}));

export default ({ user }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    var userIcon;
    if (user.avatar !== undefined) {
        userIcon = <Avatar className={classes.blue} src={user.avatar} />;
    } else
        userIcon = <AccountCircleIcon fontSize="large" />;


    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <img src={logo} alt="logo" className={classes.logo} />
                <Typography component="h1" variant="h6" color="inherit" noWrap>
                    imSearch
                </Typography>
                <span className={classes.title}></span>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                {
                    user.avatar !== '' &&
                    <div aria-controls="user-popover" aria-haspopup="true" onClick={handleClick} className={classes.avatar}>
                        {userIcon}
                    </div>
                }
                <Popover
                    id="user-popover"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    PaperProps={{
                        style: { borderRadius: '0px' }
                    }}
                >
                    <UserDropdown user={user} />
                </Popover>
            </Toolbar>
        </AppBar>
    );
}