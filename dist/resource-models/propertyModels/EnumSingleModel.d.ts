/// <reference types="react" />
import { SinglePropertyInputFields, SinglePropertyModel } from "./SinglePropertyModel";
interface EnumSingleInputFields extends SinglePropertyInputFields {
    options: any;
}
export declare class EnumSingleModel extends SinglePropertyModel {
    colorMap: any;
    constructor(id: string, other: any);
    setInputField(props: EnumSingleInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
    getOutputField(props: any): React.ReactElement<any, any> | null;
}
export {};
