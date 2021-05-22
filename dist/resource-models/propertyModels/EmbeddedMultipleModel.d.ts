import React from "react";
import { EmbeddedInputFields, EmbeddedMultipleOutputFields, EmbeddedPropertyModel } from "./NestedPropertyModel";
import { Record } from "../Record";
export declare class EmbeddedMultipleModel extends EmbeddedPropertyModel {
    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
    setOutputField(props: EmbeddedMultipleOutputFields): React.ReactElement<any, any> | null;
    getRecord(jsonValue: any[]): Map<number, Record>;
    getFormValue(value: Map<string, Record>): any;
    getJsonFormValue(value: Map<string, any>): any;
}
