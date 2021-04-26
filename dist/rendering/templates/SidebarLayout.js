import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import Switch from "@material-ui/core/Switch";
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import withStyles from "@material-ui/core/styles/withStyles";
import blue from "@material-ui/core/colors/blue";
import { switchTheme } from "../../redux/actions/app/actions";
import { authProvider } from "../../authentication/authorizationProvider";
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
    drawerHeader: Object.assign(Object.assign({ display: 'flex', alignItems: 'center', padding: theme.spacing(0, 1) }, theme.mixins.toolbar), { justifyContent: 'flex-end' }),
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
    mainToolBarElement: {
        flexGrow: 1, marginLeft: 10
    }
}));
const MySwitch = withStyles((theme) => ({
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
    }
}))(Switch);
export function SidebarLayout({ main, navbar, title }) {
    const classes = useStyles();
    const state = useSelector(state => state);
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const dispatch = useDispatch();
    const [localTheme, setLocalTheme] = useState("light");
    const switchLocalTheme = () => {
        const newTheme = (localTheme === "light") ? "dark" : "light";
        setLocalTheme(newTheme);
        dispatch(switchTheme(newTheme));
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (_jsxs("div", Object.assign({ className: classes.root }, { children: [_jsx(CssBaseline, {}, void 0),
            _jsx(AppBar, Object.assign({ position: "fixed", className: clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                }) }, { children: _jsxs(Toolbar, { children: [_jsx(IconButton, Object.assign({ color: "inherit", "aria-label": "open drawer", onClick: handleDrawerOpen, edge: "start", className: clsx(classes.menuButton, open && classes.hide) }, { children: _jsx(MenuIcon, {}, void 0) }), void 0),
                        _jsx(Typography, Object.assign({ className: classes.mainToolBarElement, variant: "h6", noWrap: true }, { children: title }), void 0),
                        _jsx(MySwitch, { checkedIcon: _jsx(NightsStayOutlinedIcon, { color: "primary" }, void 0), checked: localTheme === "light", onChange: switchLocalTheme, name: "checkedA", inputProps: { 'aria-label': 'secondary checkbox' } }, void 0),
                        _jsx(Button, Object.assign({ edge: "end", onClick: authProvider.logout, color: "inherit", endIcon: _jsx(ExitToAppIcon, {}, void 0) }, { children: "Logout" }), void 0)] }, void 0) }), void 0),
            _jsxs(Drawer, Object.assign({ className: classes.drawer, variant: "persistent", anchor: "left", open: open, classes: {
                    paper: classes.drawerPaper,
                } }, { children: [_jsx("div", Object.assign({ className: classes.drawerHeader }, { children: _jsx(IconButton, Object.assign({ onClick: handleDrawerClose }, { children: theme.direction === 'ltr' ? _jsx(ChevronLeftIcon, {}, void 0) : _jsx(ChevronRightIcon, {}, void 0) }), void 0) }), void 0),
                    _jsx(Divider, {}, void 0),
                    _jsx(List, { children: navbar }, void 0)] }), void 0),
            _jsxs("main", Object.assign({ className: clsx(classes.content, {
                    [classes.contentShift]: open,
                }) }, { children: [_jsx("div", { className: classes.drawerHeader }, void 0), main] }), void 0)] }), void 0));
}
