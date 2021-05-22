/// <reference types="react" />
import { SinglePropertyInputFields, SinglePropertyModel } from "./SinglePropertyModel";
import { InputOnChangeHandler } from "../PropertyModel";
interface EnumSingleInputFields extends SinglePropertyInputFields {
    options: any;
}
export declare class EnumSingleModel extends SinglePropertyModel {
    colorMap: any;
    constructor(id: string, other: any);
    setInputField(props: EnumSingleInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: InputOnChangeHandler): (vars: any) => void;
    setOutputField(props: any): React.ReactElement<any, any> | null;
    getRecord(jsonValue: any): any;
}
export {};
