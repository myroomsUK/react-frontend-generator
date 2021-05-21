import { SinglePropertyInputFields, SinglePropertyModel } from "./SinglePropertyModel";
import React from "react";
import { InputOnChangeHandler } from "../PropertyModel";
export declare class SingleFileModel extends SinglePropertyModel {
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: InputOnChangeHandler): any;
    setOutputField(props: any): React.ReactElement<any, any> | null;
}
