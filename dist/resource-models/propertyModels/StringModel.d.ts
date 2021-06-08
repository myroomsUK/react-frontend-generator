import { SinglePropertyModel } from "./SinglePropertyModel";
import React from "react";
import { InputOnChangeHandler } from "../PropertyModel";
import { SingleSetInputFieldProps } from "../models/SetInputFieldProps";
import { PropertyFieldConfiguration } from "../configurations/PropertyFieldConfiguration";
export declare class StringModel extends SinglePropertyModel {
    setInputField(props: SingleSetInputFieldProps, configuration?: PropertyFieldConfiguration): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: InputOnChangeHandler): (vars: any) => void;
    setOutputField(props: SingleSetInputFieldProps, configuration?: PropertyFieldConfiguration): React.ReactElement<any, any> | null;
    getRecord(jsonValue: any): any;
}
