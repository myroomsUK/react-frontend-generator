import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ({children}) {
    const classes = useStyles();

    return <div className={classes.root}>
        {children}
    </div>
}