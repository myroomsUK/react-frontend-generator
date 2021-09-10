import React, {ChangeEventHandler, useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import {MenuItem} from "@material-ui/core";

interface Props{
    name:string;
    inputFieldOnChange: (e:any) => ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
    value: any;
    options:any;
}

export const AutoCompleteFilter: React.FC<Props> = ({name,options, inputFieldOnChange, value}) => {


    return <TextField
        style={{width:100}}
        select
        name={name}
        id={name}
        value={(value)? value:""}
        onChange={inputFieldOnChange("text")}
    >
        {options.map(({id, label}:{id:string, label:string}, index:number) => <MenuItem key={index} value={id}>{label}</MenuItem> )}
    </TextField>
}
