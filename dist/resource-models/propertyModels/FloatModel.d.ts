/// <reference types="react" />
import { SinglePropertyModel } from "./SinglePropertyModel";
import { InputOnChangeHandler } from "../PropertyModel";
import { SingleSetInputFieldProps } from "../models/SetInputFieldProps";
export declare class FloatModel extends SinglePropertyModel {
    setInputField(props: SingleSetInputFieldProps): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: InputOnChangeHandler): any;
    setOutputField(props: SingleSetInputFieldProps): React.ReactElement<any, any> | null;
    getRecord(jsonValue: any): any;
}
