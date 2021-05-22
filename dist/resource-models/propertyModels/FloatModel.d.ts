/// <reference types="react" />
import { SinglePropertyInputFields, SinglePropertyModel } from "./SinglePropertyModel";
import { InputOnChangeHandler } from "../PropertyModel";
export declare class FloatModel extends SinglePropertyModel {
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: InputOnChangeHandler): any;
    setOutputField(props: any): React.ReactElement<any, any> | null;
    getRecord(jsonValue: any): any;
}
