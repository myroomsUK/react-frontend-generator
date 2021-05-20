import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Chip from "@material-ui/core/Chip";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";

const useStyles = makeStyles({
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
});

export default function ChipGenerator({propertyRecord, propertyModel, colorMap}){
    const {options} = propertyModel;
    const label = options?.find(option => option.id === propertyRecord)?.label;
    const id = options?.find(option => option.id === propertyRecord)?.id;

    return <Chip
        label={label}
    />
}
