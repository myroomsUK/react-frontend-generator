import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import { Button, useMediaQuery } from "@material-ui/core";
import AddImageDialog from "../../../generators/forms/inputs/AddImageDialog";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));
export default function FileList({ list, onAdd, onDelete, saveImages, onChange, fileObjects }) {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:900px)');
    const [open, setOpen] = useState(false);
    const listItems = list.map(({ title, url, actionIcon }) => _jsxs(ListItem, { children: [_jsx(ListItemText, { primary: title }, void 0), _jsxs(ListItemSecondaryAction, { children: [_jsx(IconButton, Object.assign({ edge: "end", "aria-label": "delete" }, { children: _jsx(FolderIcon, {}, void 0) }), void 0), actionIcon] }, void 0)] }, void 0));
    return (_jsxs("div", Object.assign({ className: classes.root }, { children: [_jsx("div", Object.assign({ className: classes.demo }, { children: _jsxs(List, Object.assign({ dense: false }, { children: [listItems, _jsx(ListItem, { children: _jsx(Button, Object.assign({ variant: "contained", color: "primary", onClick: () => setOpen(true) }, { children: "Add" }), void 0) }, void 0)] }), void 0) }), void 0), _jsx(AddImageDialog, { open: open, setOpen: setOpen, onChange: onChange, fileObjects: fileObjects, onAdd: onAdd, onDelete: onDelete, saveImages: saveImages }, void 0)] }), void 0));
}
