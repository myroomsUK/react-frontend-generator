import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
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
export default function ({ visible = true, icon, color, onClick, text, requiresConfirmation = false, message = "Please, confirm this action" }) {
    if (!visible)
        return _jsx(_Fragment, {}, void 0);
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const localClickHandler = () => {
        onClick();
        setShow(false);
    };
    const buttonClickAction = (requiresConfirmation) ? () => setShow(true) : onClick;
    const button = (icon) ? _jsx(IconButton, Object.assign({ variant: "contained", color: color, onClick: buttonClickAction }, { children: icon }), void 0) : _jsx(Button, Object.assign({ variant: "contained", color: color, onClick: buttonClickAction }, { children: text }), void 0);
    return _jsxs(_Fragment, { children: [button, requiresConfirmation && _jsx(Modal, Object.assign({ "aria-labelledby": "transition-modal-title", "aria-describedby": "transition-modal-description", open: show, onClose: () => setShow(false), closeAfterTransition: true, className: classes.modal, BackdropComponent: Backdrop, BackdropProps: {
                    timeout: 500,
                } }, { children: _jsx(Fade, Object.assign({ in: show }, { children: _jsxs("div", Object.assign({ className: classes.paper }, { children: [_jsx("h2", Object.assign({ id: "transition-modal-title" }, { children: "Confirm" }), void 0), message, _jsx(Button, Object.assign({ color: "primary", edge: "end", "aria-label": "delete", onClick: localClickHandler }, { children: "Confirm" }), void 0)] }), void 0) }), void 0) }), void 0)] }, void 0);
}
