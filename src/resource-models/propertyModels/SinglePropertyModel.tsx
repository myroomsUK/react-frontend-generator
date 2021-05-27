import {InputFields, OutputFields, PropertyModel} from "../PropertyModel";
import {Errors} from "../../generators/errors/Errors";
import {Typography} from "@material-ui/core";
import React from "react";
import _ from 'lodash'

interface SingleErrors{
    hasError:boolean,
    errorMessage?: string
}

export interface SinglePropertyInputFields extends SingleInputFields{
    hasError:boolean,
    errorMessage?: string
}

export abstract class SinglePropertyModel extends PropertyModel{

    manipulateErrors(errors:Errors): SingleErrors {
        const errorMessage = errors.returnMessageByName(this.id);
        const hasError = errors.containsError(this.id);
        return {errorMessage, hasError};
    }

    getInputField(props: InputFields): React.ReactElement<any, any> | null {
        const {errors, formValue, setFormValue} = props;
        const {hasError, errorMessage} = this.manipulateErrors(errors);
        const label = _.startCase(this.label)

        const inputHandler = this.getInputOnChangeHandler({formValue, setFormValue});
        const value = formValue.get(this.id);
        const newProps:SinglePropertyInputFields = {...props,  hasError, errorMessage, inputHandler:inputHandler, value:value, label: label}
        return this.setInputField(newProps);
    }

    getOutputField(props:SingleOutputFields): React.ReactElement<any, any> | null {
        const {record, showLabel} = props;
        // @ts-ignore
        const newProps:SingleOutputFields = {...props, propertyRecord:this.getRecord(record)  }
        return <>
            {showLabel && <Typography>{_.startCase(this.label)}</Typography>}
            {this.setOutputField(newProps)}
        </>
    }

    getFormValue(value:any){
        return value;
    }

    getJsonFormValue(value: any){
        return value
    }
}

interface SingleInputFields extends InputFields{
    inputHandler: (vars:any) => void,
    value: any,
    label:string
}

interface SingleOutputFields extends OutputFields{
    propertyRecord:any
}