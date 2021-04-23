import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React from "react";

function RecapHeader({primary, secondary, actions}){
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: "rgb(245,247,250)",
            padding: 10,
            minHeight: 150
        },
        title: {

        }
    }));
    const classes = useStyles();

    let mda = 4;
    let mdp = 4;
    let mds = 4;


    return <Paper className={classes.root} square={true} color="red">
        <Grid container>
            <Grid item md={mdp}>{primary}</Grid>
            <Grid item md={mds}>{secondary}</Grid>
            <Grid item md={mda}>{actions}</Grid>
        </Grid>
    </Paper>

}

RecapHeader.propTypes = {
    primary: PropTypes.any.isRequired
}


export default RecapHeader;