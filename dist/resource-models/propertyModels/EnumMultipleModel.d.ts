import { SinglePropertyModel } from "./SinglePropertyModel";
import React from "react";
import { InputOnChangeHandler } from "../PropertyModel";
import { SingleSetInputFieldProps } from "../models/SetInputFieldProps";
interface EnumMultipleInputFields extends SingleSetInputFieldProps {
    options: any;
}
export declare class EnumMultipleModel extends SinglePropertyModel {
    options: any;
    colorMap: any;
    constructor(id: string, others: any);
    setInputField(props: EnumMultipleInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: InputOnChangeHandler): (vars: any) => void;
    setOutputField(props: SingleSetInputFieldProps): React.ReactElement<any, any> | null;
    getRecord(jsonValue: any): any;
}
export {};
