/// <reference types="react" />
import { SinglePropertyModel } from "./SinglePropertyModel";
import { InputOnChangeHandler } from "../PropertyModel";
import { SingleSetInputFieldProps } from "../models/SetInputFieldProps";
export declare class MoneyModel extends SinglePropertyModel {
    setInputField(props: SingleSetInputFieldProps): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: InputOnChangeHandler): (vars: any) => void;
    setOutputField(props: SingleSetInputFieldProps): React.ReactElement<any, any> | null;
    getRecord(jsonValue: any): any;
}
