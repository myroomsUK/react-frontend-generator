import React, {useState} from "react";
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core";

export default function SingleEnumShow({propertyModel, propertyRecord, colorMap}:any){
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
}