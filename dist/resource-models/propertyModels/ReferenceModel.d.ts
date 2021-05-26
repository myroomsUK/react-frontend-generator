import { PropertyModelCore } from "../PropertyModelCore";
import React from "react";
import { SinglePropertyModel } from "./SinglePropertyModel";
import { InputOnChangeHandler } from "../PropertyModel";
export declare class ReferenceModel extends SinglePropertyModel {
    constructor(id: string, other: PropertyModelCore);
    setInputField(props: ReferenceInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: InputOnChangeHandler): (vars: any) => void;
    setOutputField(props: any): React.ReactElement<any, any> | null;
    getRecord(jsonValue: any): any;
    getFormValue(value: any): any;
    getJsonFormValue(value: Map<string, any>): any;
}
interface ReferenceInputFields {
    inputHandler: any;
    value: Map<string, any> | number;
    model: this;
    refreshReferencesMap: any;
}
export {};
