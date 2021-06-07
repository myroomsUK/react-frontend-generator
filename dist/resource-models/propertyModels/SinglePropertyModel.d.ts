import { InputFields, OutputFields, PropertyModel } from "../PropertyModel";
import { Errors } from "../../generators/errors/Errors";
import React from "react";
import { SingleInputPropsInterface } from "../models/InputProps";
interface SingleErrors {
    hasError: boolean;
    errorMessage?: string;
}
export interface SinglePropertyInputFields extends SingleInputFields {
    hasError: boolean;
    errorMessage?: string;
}
export declare abstract class SinglePropertyModel extends PropertyModel {
    manipulateErrors(errors: Errors): SingleErrors;
    getInputField(props: SingleInputPropsInterface): React.ReactElement<any, any> | null;
    getOutputField(props: SingleOutputFields): React.ReactElement<any, any> | null;
    getFormValue(value: any): any;
    getJsonFormValue(value: any): any;
}
interface SingleInputFields extends InputFields {
    inputHandler: (vars: any) => void;
    value: any;
    label: string;
}
interface SingleOutputFields extends OutputFields {
    propertyRecord: any;
}
export {};
