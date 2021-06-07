import { SinglePropertyModel } from "./SinglePropertyModel";
import { InputOnChangeHandler } from "../PropertyModel";
import React from "react";
import { SingleSetInputFieldProps } from "../models/SetInputFieldProps";
interface EnumSingleInputFields extends SingleSetInputFieldProps {
    options: any;
}
export declare class EnumSingleModel extends SinglePropertyModel {
    colorMap: any;
    constructor(id: string, other: any);
    setInputField(props: EnumSingleInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: InputOnChangeHandler): (vars: any) => void;
    setOutputField(props: any): JSX.Element;
    getRecord(jsonValue: any): any;
}
export {};
