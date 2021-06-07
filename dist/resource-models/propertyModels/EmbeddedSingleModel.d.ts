import React from "react";
import { EmbeddedPropertyModel, EmbeddedSingleOutputFields } from "./NestedPropertyModel";
import { Record } from "../Record";
import { FormValue } from "../formvalue/FormValue";
import { EmbeddedSingleSetInputFieldProps } from "../models/SetInputFieldProps";
import { EmbeddedSingleInputPropsInterface } from "../models/InputProps";
export declare class EmbeddedSingleModel extends EmbeddedPropertyModel {
    setInputField(props: EmbeddedSingleSetInputFieldProps): React.ReactElement<any, any> | null;
    getInputField(props: EmbeddedSingleInputPropsInterface, inputElement?: undefined): React.ReactElement<any, any> | null;
    setOutputField(props: EmbeddedSingleOutputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
    getRecord(jsonValue: object): Record;
    getFormValue(value: Record): any;
    getJsonFormValue(value: FormValue): any;
}
