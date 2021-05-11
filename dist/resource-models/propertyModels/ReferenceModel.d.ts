import { PropertyModelCore } from "../PropertyModelCore";
import React from "react";
import { SinglePropertyModel } from "./SinglePropertyModel";
export declare class ReferenceModel extends SinglePropertyModel {
    constructor(id: string, other: PropertyModelCore);
    setInputField(props: any): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (event: any) => void;
    getOutputField(props: any): React.ReactElement<any, any> | null;
}
