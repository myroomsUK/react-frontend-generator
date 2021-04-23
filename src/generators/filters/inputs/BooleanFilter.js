import React, {useEffect, useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {Typography} from "@material-ui/core";

export default function BooleanFilter ({name, type, inputFieldOnChange, value}){

    //const inputFieldOnChange(type);
    useEffect(()=>{if(value===undefined){
        setCheckedTrue(false);
        setCheckedFalse(false);
    }},[value])

    const [checkedTrue, setCheckedTrue] = useState(false);
    const [checkedFalse, setCheckedFalse] = useState(false);

    const onClickTrue = () => {
        setCheckedTrue(!checkedTrue);
        if(checkedFalse){
            setCheckedFalse(!checkedFalse);
        }

        if(!checkedTrue){
            inputFieldOnChange(type)(name, true);
        }else{
            inputFieldOnChange(type)(name, "");
        }
    }
    const onClickFalse = () => {

        if(checkedTrue){
            setCheckedTrue(!checkedTrue);
        }
        setCheckedFalse(!checkedFalse);

        if(!checkedFalse){
            inputFieldOnChange(type)(name, false);
        }else{
            inputFieldOnChange(type)(name, "");
        }
    }

    return <React.Fragment key={name}>
        <ListItem>
            <FormControlLabel control={<Checkbox checked={checkedTrue} id={name} name={name} onClick={onClickTrue} />} label={"T"}  />
            <FormControlLabel control={<Checkbox checked={checkedFalse} id={name} name={name} onClick={onClickFalse} />} label={"F"}  />
        </ListItem>
    </React.Fragment>

}