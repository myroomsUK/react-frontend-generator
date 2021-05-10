/// <reference types="react" />
import { SinglePropertyInputFields, SinglePropertyModel } from "./SinglePropertyModel";
interface EnumMultipleInputFields extends SinglePropertyInputFields {
    options: any;
}
export declare class EnumMultipleModel extends SinglePropertyModel {
    setInputField(props: EnumMultipleInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
    getOutputField(props: any): React.ReactElement<any, any> | null;
}
export {};
