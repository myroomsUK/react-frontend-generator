import Grid from "@material-ui/core/Grid";
import React from "react";

export default function ({banner, left, right}){
    return <Grid container>
        {banner && <Grid item md={12} xs={12}>
            {banner}
        </Grid>}
        <Grid item md={12} xs={12}>
            <Grid container spacing={1}>
                <Grid item md={9} xs={12}>
                    {left}
                </Grid>
                <Grid item md={3} xs={12}>
                    {right}
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}