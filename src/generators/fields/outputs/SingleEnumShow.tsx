import React, {useState} from "react";
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core";
import {green, red, yellow} from "@material-ui/core/colors";

export default function SingleEnumShow({propertyModel, propertyRecord, colorMap}:any){
    const {options} = propertyModel;

    const label = options?.find((option:any) => option.id === propertyRecord)?.label;
    const id = options?.find((option:any) => option.id === propertyRecord)?.id;
    /*const classes = makeStyles({
        not_managed: {
            backgroundColor: red.A700,
            color:"white"
        },
        managed: {
            backgroundColor: green.A700,
        },
        discarded: {
            backgroundColor: yellow.A700,
        },
        enquired: {
            backgroundColor: yellow.A100,
        },
    })();

    // @ts-ignore
    const correct = classes[id];*/


    return <Chip
        label={label}
    />
}

/*
  const trueColorMap = (colorMap) ?? {};
    const classes = makeStyles(trueColorMap)();
    const {options} = propertyModel;

    const label = options?.find((option:any) => option.id === propertyRecord)?.label;
    const id = options?.find((option:any) => option.id === propertyRecord)?.id;

    // @ts-ignore
    return <Chip
        className={classes[id]}
        label={label}
    />
 */