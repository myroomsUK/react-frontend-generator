import { SinglePropertyInputFields, SinglePropertyModel } from "./SinglePropertyModel";
import React from "react";
import { InputOnChangeHandler } from "../PropertyModel";
interface EnumMultipleInputFields extends SinglePropertyInputFields {
    options: any;
}
export declare class EnumMultipleModel extends SinglePropertyModel {
    options: any;
    colorMap: any;
    constructor(id: string, others: any);
    setInputField(props: EnumMultipleInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: InputOnChangeHandler): (vars: any) => void;
    setOutputField(props: any): React.ReactElement<any, any> | null;
}
export {};
