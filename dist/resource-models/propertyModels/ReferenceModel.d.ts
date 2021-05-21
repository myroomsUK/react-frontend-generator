import { PropertyModelCore } from "../PropertyModelCore";
import React from "react";
import { SinglePropertyModel } from "./SinglePropertyModel";
import { InputOnChangeHandler } from "../PropertyModel";
export declare class ReferenceModel extends SinglePropertyModel {
    constructor(id: string, other: PropertyModelCore);
    setInputField(props: ReferenceInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: InputOnChangeHandler): (vars: any) => void;
    setOutputField(props: any): React.ReactElement<any, any> | null;
}
interface ReferenceInputFields {
    inputHandler: any;
    value: Map<string, any>;
    model: this;
    refreshReferencesMap: any;
}
export {};
