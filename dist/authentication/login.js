import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { authProvider } from "./authorizationProvider";
function Copyright() {
    return (_jsxs(Typography, Object.assign({ variant: "body2", color: "textSecondary", align: "center" }, { children: ['Copyright © ', _jsx(Link, Object.assign({ color: "inherit", href: "https://material-ui.com/" }, { children: "Your Website" }), void 0), ' ', new Date().getFullYear(), '.'] }), void 0));
}
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function SignIn() {
    const [formValue, setFormValue] = useState({});
    const [errorMessage, setErrorMessage] = useState("ERRORE");
    const [open, setOpen] = React.useState(false);
    const handleAuthenticationError = (error) => {
        setErrorMessage(error.message);
        setOpen(true);
    };
    const onChangeHandler = (event) => {
        const target = event.target;
        let value = target.value;
        const name = target.id;
        setFormValue(Object.assign(Object.assign({}, formValue), { [name]: value }));
    };
    const classes = useStyles();
    const onSubmitHandler = (e, value) => {
        e.preventDefault();
        authProvider.login(formValue).catch((reason) => handleAuthenticationError(reason));
        //.then(dispatch(push(url)))
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Container, Object.assign({ component: "main", maxWidth: "xs" }, { children: [_jsx(CssBaseline, {}, void 0),
                    _jsxs("div", Object.assign({ className: classes.paper }, { children: [_jsx(Avatar, Object.assign({ className: classes.avatar }, { children: _jsx(LockOutlinedIcon, {}, void 0) }), void 0),
                            _jsx(Typography, Object.assign({ component: "h1", variant: "h5" }, { children: "Sign in" }), void 0),
                            _jsxs(ValidatorForm, Object.assign({ className: classes.form, onSubmit: onSubmitHandler, onError: errors => console.log(errors) }, { children: [_jsx(TextValidator, { variant: "outlined", margin: "normal", onChange: onChangeHandler, required: true, fullWidth: true, id: "email", label: "Email Address", name: "email", autoComplete: "email", autoFocus: true }, void 0),
                                    _jsx(TextValidator, { variant: "outlined", margin: "normal", onChange: onChangeHandler, required: true, fullWidth: true, name: "password", label: "Password", type: "password", id: "password", autoComplete: "current-password" }, void 0),
                                    _jsx(Button, Object.assign({ type: "submit", fullWidth: true, variant: "contained", color: "primary", className: classes.submit }, { children: "Sign in" }), void 0),
                                    _jsxs(Grid, Object.assign({ container: true }, { children: [_jsx(Grid, Object.assign({ item: true, xs: true }, { children: _jsx(Link, Object.assign({ href: "#", variant: "body2" }, { children: "Forgot password?" }), void 0) }), void 0),
                                            _jsx(Grid, Object.assign({ item: true }, { children: _jsx(Link, Object.assign({ href: "#", variant: "body2" }, { children: "Don't have an account? Sign Up" }), void 0) }), void 0)] }), void 0)] }), void 0)] }), void 0),
                    _jsx(Box, Object.assign({ mt: 8 }, { children: _jsx(Copyright, {}, void 0) }), void 0)] }), void 0),
            _jsx(Snackbar, Object.assign({ open: open, autoHideDuration: 6000, onClose: handleClose }, { children: _jsx(Alert, Object.assign({ onClose: handleClose, severity: "error" }, { children: errorMessage }), void 0) }), void 0)] }, void 0));
}
