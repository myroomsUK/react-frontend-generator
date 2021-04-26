var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
export default function (_a) {
    var { onClick, icon = false, message = "Are you sure you want to delete this element?", text = "Delete" } = _a, rest = __rest(_a, ["onClick", "icon", "message", "text"]);
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const localClickHandler = () => {
        onClick();
        setShow(false);
    };
    const button = (icon) ? _jsx(IconButton, Object.assign({ color: "primary", variant: "contained" }, rest, { onClick: () => setShow(true) }, { children: _jsx(DeleteIcon, {}, void 0) }), void 0) :
        _jsx(Button, Object.assign({}, rest, { onClick: () => setShow(true) }, { children: text }), void 0);
    return _jsxs(_Fragment, { children: [button, _jsx(Modal, Object.assign({ "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", open: show, onClose: () => setShow(false), closeAfterTransition: true, className: classes.modal, BackdropComponent: Backdrop, BackdropProps: {
                    timeout: 500,
                } }, { children: _jsx(Fade, Object.assign({ in: show }, { children: _jsxs("div", Object.assign({ className: classes.paper }, { children: [_jsx("h2", Object.assign({ id: "transition-modal-title" }, { children: "Delete" }), void 0), message, _jsx(Button, Object.assign({ color: "primary", edge: "end", "aria-label": "delete", onClick: localClickHandler }, { children: "Confirm" }), void 0)] }), void 0) }), void 0) }), void 0)] }, void 0);
}
