import {useSelector} from "react-redux";
import React, {useEffect} from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useAlertStyles = makeStyles((theme)=>({
    root: {
        width: '50vw',
    },
}))

const useSnackBarStyles = makeStyles((theme)=>({
    root: {
    },
}))



export default function ErrorBar() {
    const {statusBar} = useSelector(state=>state.appReducer);
    const {message, severity} = statusBar;

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
            setOpen(true)
        }
    }, [message])


    return <Snackbar
        //className={snackBarStyles.root}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
    >
        <Alert variant="filled" className={styles.root} onClose={handleClose} severity={severity}>
            {message}
        </Alert>
    </Snackbar>

}

