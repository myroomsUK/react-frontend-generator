import { SinglePropertyInputFields, SinglePropertyModel } from "./SinglePropertyModel";
import React from "react";
export declare class SingleFileModel extends SinglePropertyModel {
    setInputField(props: SinglePropertyInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): any;
    setOutputField(props: any): React.ReactElement<any, any> | null;
}
