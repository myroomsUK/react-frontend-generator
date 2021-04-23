import Grid from "@material-ui/core/Grid";
import React from "react";

export default function ({banner, left, center, right}){
    return <Grid container>
        {banner && <Grid item md={12} xs={12}>
            {banner}
        </Grid>}
        <Grid item md={12} xs={12}>
            <Grid container>
                <Grid item md={3} xs={3}>
                    {left}
                </Grid>
                <Grid item md={6} xs={6}>
                    {center}
                </Grid>
                <Grid item md={3} xs={3}>
                    {right}
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}