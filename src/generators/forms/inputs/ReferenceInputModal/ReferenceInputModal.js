import React, {useMemo} from "react";
import {Create} from "../../../pages/CreatePageGenerator";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {makeStyles} from "@material-ui/core";

const useDialogStyle = makeStyles((theme)=> ({
    root:{
        minWidth: "40vw"
    }
}))


export default function ReferenceInputModal({open, handleClose,resourceName}) {

    // getModalStyle is not a pure function, we roll the style only on the first render;

    const body = useMemo(()=>{
        if(resourceName){
            return <Create propResourceName={resourceName}/>

        }

    },[resourceName])

    const classes = useDialogStyle();

    return (
        <Dialog className={classes.root} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Create new</DialogTitle>
            <DialogContent>
                {body}
            </DialogContent>
            <DialogActions>
            </DialogActions>

        </Dialog>
    );
}