import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormHelperText from "@material-ui/core/FormHelperText";
import {FormControl} from "@material-ui/core";
import {SingleSetInputFieldProps} from "../../../resource-models/models/SetInputFieldProps";

export default function Booleanshow({value}:SingleSetInputFieldProps){
    return (value) ? <CheckIcon/> : <CloseIcon/>
}