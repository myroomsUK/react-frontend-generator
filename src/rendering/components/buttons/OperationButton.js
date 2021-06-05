import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
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



export default function ({visible = true, icon, color, onClick, text, requiresConfirmation = false, message="Please, confirm this action"}){
    if(!visible) return <></>


    const classes = useStyles();
    const [show, setShow] = useState(false);

    const localClickHandler = () => {
        onClick();
        setShow(false)
    }

    const buttonClickAction = (requiresConfirmation) ? ()=>setShow(true) : onClick
    const button = (icon) ? <IconButton variant="contained" color={color} onClick={buttonClickAction}>{icon}</IconButton> : <Button  variant="contained" color={color} onClick={buttonClickAction}>{text}</Button>

    return <>
        {button}
        {requiresConfirmation && <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={show}
            onClose={() => setShow(false)}
            closeAfterTransition
            className={classes.modal}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={show}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Confirm</h2>
                    {message}
                    <Button color="primary" edge="end" aria-label="delete" onClick={localClickHandler}>
                        Confirm
                    </Button>
                </div>
            </Fade>
        </Modal>}
    </>


}