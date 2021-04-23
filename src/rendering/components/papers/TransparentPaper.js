import Paper from "@material-ui/core/Paper";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "transparent",
        elevation:0,
    }
}));
export default function TransparentPaper(props){
    const classes = useStyles();
    return <Paper square={true} {...props} className={classes.root}>{props.children}</Paper>
}