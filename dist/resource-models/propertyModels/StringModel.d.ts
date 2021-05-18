import { SinglePropertyInputFields, SinglePropertyModel } from "./SinglePropertyModel";
import React from "react";
export declare class StringModel extends SinglePropertyModel {
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
    setOutputField(props: any): React.ReactElement<any, any> | null;
}
