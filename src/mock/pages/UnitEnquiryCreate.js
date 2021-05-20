import React from "react";
import Grid from "@material-ui/core/Grid";

export default function (props){
    const {model} = props
    return <div>
        <div title={"Unit Details"}>
            <Grid container spacing={2}>
                <Grid xs={12} md={4} item>
                    {model.getInputField("unitLetter", props)}
                </Grid>
                <Grid xs={12} md={4} item>
                    {model.getInputField("type", props)}
                </Grid>
                <Grid xs={12} md={4} item>
                    {model.getInputField("weeklyPrice", props)}
                </Grid>
            </Grid>
        </div>
    </div>
}