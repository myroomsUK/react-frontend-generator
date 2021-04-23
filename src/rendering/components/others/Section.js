import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import SimpleCard from "./Card";
import Divider from "@material-ui/core/Divider";

export default function Section({title, children, elevation=0, avatar}){


    const useStyles = makeStyles((theme) => ({
        root: {
            width:"100%",
            padding: 10,
        },
        title: {
            fontWeight:"bold"
        },
        titleWrapper:{
            marginTop:10,
            marginBottom:30
        }
    }));

    const classes = useStyles();

    return <SimpleCard title={title} avatar={avatar} elevation={elevation} square={true} className={classes.root}>
                {children && <Grid container>
                    {children}
                </Grid>}
                <Divider></Divider>
            </SimpleCard>



}