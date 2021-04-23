import {withStyles} from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";
import Carousel from "react-material-ui-carousel";
import React from "react";
import {DropzoneAreaBase} from "material-ui-dropzone";
import {Button} from "@material-ui/core";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    dialog:{
        width: "75vw"
    }
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function AddImageDialog({open,setOpen, onChange, fileObjects, onAdd, onDelete, saveImages}) {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog fullWidth onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add image
                </DialogTitle>
                <DialogContent dividers>
                    <DropzoneAreaBase dropzoneText={"Upload images"} onChange={onChange} filesLimit={10}
                                      fileObjects={fileObjects} onAdd={onAdd} onDelete={onDelete}/>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained" onClick={saveImages}>Save Images</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}