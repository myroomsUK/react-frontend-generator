import React from "react";
import { EmbeddedInputFields, EmbeddedPropertyModel, EmbeddedSingleOutputFields } from "./NestedPropertyModel";
import { Record } from "../Record";
import { FormValue } from "../formvalue/FormValue";
export declare class EmbeddedSingleModel extends EmbeddedPropertyModel {
    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null;
    setOutputField(props: EmbeddedSingleOutputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
    getRecord(jsonValue: object): Record;
    getFormValue(value: Record): any;
    getJsonFormValue(value: FormValue): any;
}
