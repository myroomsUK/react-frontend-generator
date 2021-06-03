import React from "react";
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core";

const useStyles = (colorMap) => makeStyles(colorMap)

export default function ChipGenerator({propertyRecord, propertyModel, colorMap}){
    const {options} = propertyModel;
    const classes = useStyles(colorMap)()
    const label = options?.find(option => option.id === propertyRecord)?.label;
    const id = options?.find(option => option.id === propertyRecord)?.id;

    return <Chip
        label={label}
        className={classes[id]}
    />
}
