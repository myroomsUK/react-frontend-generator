import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import React, { useEffect } from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useAlertStyles = makeStyles((theme) => ({
    root: {
        width: '50vw',
    },
}));
const useSnackBarStyles = makeStyles((theme) => ({
    root: {},
}));
export default function ErrorBar() {
    const { statusBar } = useSelector(state => state.appReducer);
    const { message, severity } = statusBar;
    const styles = useAlertStyles();
    const snackBarStyles = useSnackBarStyles();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    useEffect(() => {
        if (message !== undefined) {
            setOpen(true);
        }
    }, [message]);
    return _jsx(Snackbar
    //className={snackBarStyles.root}
    , Object.assign({ 
        //className={snackBarStyles.root}
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
        }, open: open, autoHideDuration: 6000 }, { children: _jsx(Alert, Object.assign({ variant: "filled", className: styles.root, onClose: handleClose, severity: severity }, { children: message }), void 0) }), void 0);
}
