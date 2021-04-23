import {makeStyles, useTheme} from "@material-ui/core/styles";
import React, {useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Drawer from "@material-ui/core/Drawer";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {useDispatch, useSelector} from "react-redux";
import Switch from "@material-ui/core/Switch";
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import withStyles from "@material-ui/core/styles/withStyles";
import blue from "@material-ui/core/colors/blue";
import {switchTheme} from "../../redux/actions/app/actions";
import {authProvider} from "../../authentication/authorizationProvider";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundImage: "/assets/imgs/background-filigrana-30.jpg"
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    mainToolBarElement:{
        flexGrow:1, marginLeft:10
    }
}));

const MySwitch = withStyles((theme)=>({
    switchBase: {
        color: "secondary",
        '&$checked': {
            color: "secondary",
        },
        '&$checked + $track': {
            backgroundColor: blue[500],
        },
    },
    checked: {
        border: `-4px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
    }}))(Switch);



export function SidebarLayout({main, navbar, title}) {
    const classes = useStyles();
    const state = useSelector(state=>state);
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const dispatch = useDispatch();

    const [localTheme, setLocalTheme] = useState("light");

    const switchLocalTheme = () => {
        const newTheme = (localTheme ==="light") ? "dark" : "light";
        setLocalTheme(newTheme);
        dispatch(switchTheme(newTheme));
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.mainToolBarElement} variant="h6" noWrap>
                        {title}
                    </Typography>
                    <MySwitch
                        checkedIcon={<NightsStayOutlinedIcon color="primary"/>}
                        checked={localTheme==="light"}
                        onChange={switchLocalTheme}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <Button edge="end" onClick={authProvider.logout} color="inherit" endIcon={<ExitToAppIcon/>}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {navbar}
                </List>

            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                {main}
            </main>
        </div>
    );
}