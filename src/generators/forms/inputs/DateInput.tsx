import 'date-fns';
import React from "react";
import {DateModel} from "../../../resource-models/propertyModels/DateModel";
import {CustomTextValidator} from "../formHelpers";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import {TextFieldProps} from "@material-ui/core";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import moment from "moment";


export interface DateInput{
    model: DateModel;
    onClick: (e: any, value: any)=>void;
    value: any;
    hasError:boolean;
    id?:string,
    name?:string,
    label?: string;
    errorMessage?:string;
    adornment?: any;
}


export default function ({model,name = model.id, onClick, value, label = model.label, hasError ,errorMessage}:DateInput){
    const date = (value !== undefined) ? moment(value, "YYYY-MM-DD") : null;

    const handleDateChange = (date: MaterialUiPickersDate | null) => {
        onClick({target:{value:date?.format("YYYY-MM-DD"), name:name}}, date);
    };

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker
                    style={{"width": "100%"}}
                    name={name}
                    disableToolbar
                    variant="inline"
                    format="DD/MM/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label={label}
                    value={date}
                    onChange={handleDateChange}
                    disablePast={true}
                    error={hasError}
                    helperText={errorMessage}
                    TextFieldComponent={DateValidationInput}
                />
        </MuiPickersUtilsProvider>
    );
}

export const DateValidationInput: React.FC<TextFieldProps> = (props) => {
    const newProps = {...props, style:{width:"100%"}, variant:"outlined"};
    // @ts-ignore
    return <CustomTextValidator {...newProps}/>
}

