import DeleteIcon from "@material-ui/icons/Delete";
import React, {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function ({onClick, icon=false, message="Are you sure you want to delete this element?", text="Delete", ...rest}){

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
        setShow(false)
    }


    const button = (icon) ? <IconButton color="primary" variant="contained" {...rest} onClick={()=>setShow(true)}>
            <DeleteIcon />
        </IconButton> :
        <Button {...rest} onClick={()=>setShow(true)}>
            {text}
        </Button>

    return <>
        {button}
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={show}
            onClose={()=>setShow(false)}
            closeAfterTransition
            className={classes.modal}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={show} >
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">Delete</h2>
                    {message}
                    <Button color="primary" edge="end" aria-label="delete" onClick={localClickHandler}>
                        Confirm
                    </Button>
                </div>
            </Fade>
        </Modal>
    </>
}
