import React from "react";
import { EmbeddedMultipleOutputFields, EmbeddedPropertyModel } from "./NestedPropertyModel";
import { Record } from "../Record";
import { EmbeddedMultipleInputPropsInterface } from "../models/InputProps";
import { EmbeddedMultipleSetInputFieldProps } from "../models/SetInputFieldProps";
export declare class EmbeddedMultipleModel extends EmbeddedPropertyModel {
    setInputField(props: EmbeddedMultipleSetInputFieldProps): React.ReactElement<any, any> | null;
    getInputField(props: EmbeddedMultipleInputPropsInterface, inputElement?: undefined): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
    setOutputField({ record, model, showElement, list, table }: EmbeddedMultipleOutputFields): React.ReactElement<any, any> | null;
    getRecord(jsonValue: any[]): Map<number, Record>;
    getFormValue(value: Map<string, Record>): any;
    getJsonFormValue(value: Map<string, any>): any;
}
