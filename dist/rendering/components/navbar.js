import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React, { useEffect, useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/styles";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import _ from 'lodash';
export function Navbar() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [navbarObjects, setNavbarObjects] = useState([]);
    useEffect(() => {
        const link = state.router.location.pathname;
        const checkItem = (item, link) => {
            return item.getLink() !== "/" && _.startsWith(link, item.getLink());
        };
        const findActive = function (navbarItems, link) {
            navbarItems.forEach(item => {
                item.setActive(checkItem(item, link));
                const childList = item.getChildList();
                if (childList) {
                    findActive(childList, link);
                    item.expanded = childList.some(item => item.active === true || item.expanded === true);
                }
            });
        };
        const newNavbarObjects = _.cloneDeep(navbarObjects);
        findActive(newNavbarObjects, link);
        setNavbarObjects(newNavbarObjects);
    }, [state.router.location.pathname]);
    return ListGenerator(navbarObjects, "");
}
;
function ListGenerator(list, className) {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }));
    const classes = useStyles();
    return list.map(({ text, onClick, childList, icon, active, expanded }, index) => {
        if (childList) {
            return _jsx(ListElementWithChildList, { expanded: expanded, text: text, index: index, className: className, icon: icon, childList: childList, classes: classes, selected: active }, index);
        }
        else {
            return (_jsxs(ListItem, Object.assign({ className: (className ? className : ""), button: true, onClick: onClick, selected: active }, { children: [_jsx(ListItemIcon, { children: icon }, void 0),
                    _jsx(ListItemText, { primary: text }, void 0)] }), text));
        }
    });
}
function ListElementWithChildList({ index, className, text, icon, childList, classes, selected, expanded }) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (expanded)
            setOpen(true);
    }, [expanded]);
    return _jsxs(React.Fragment, { children: [_jsxs(ListItem, Object.assign({ className: (className ? className : ""), button: true, onClick: () => setOpen(!open), selected: selected }, { children: [_jsxs(ListItemIcon, { children: [" ", open ? _jsx(ExpandLess, {}, void 0) : _jsx(ExpandMore, {}, void 0)] }, void 0),
                    _jsx(ListItemText, { primary: text }, void 0)] }), text),
            _jsx(CollapsedListElement, { open: open, childList: childList, classes: classes }, void 0)] }, index);
}
function CollapsedListElement({ childList, open, classes }) {
    return _jsx(Collapse, Object.assign({ in: open, timeout: "auto", unmountOnExit: true }, { children: _jsx(List, Object.assign({ component: "div", disablePadding: true }, { children: ListGenerator(childList, classes.nested) }), void 0) }), void 0);
}
class NavbarItem {
    constructor(icon, text, link, onClick, childList = undefined) {
        this.getLink = function () {
            return this.link;
        };
        this.setActive = function (active) {
            this.active = active;
        };
        this.getChildList = function () {
            return this.childList;
        };
        this.icon = icon;
        this.text = text;
        this.link = link;
        this.onClick = () => onClick(link);
        this.childList = childList;
        this.active = false;
        this.expanded = false;
    }
    toJson() {
        const childListToSend = (this.childList) ? this.childList.map(child => child.toJson()) : (this.childList);
        return { icon: this.icon, text: this.text, link: this.link, onClick: this.onClick, childList: childListToSend, active: this.active };
    }
}
