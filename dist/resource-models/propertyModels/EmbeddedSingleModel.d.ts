import React from "react";
import { EmbeddedInputFields, NestedPropertyModel } from "./NestedPropertyModel";
export declare class EmbeddedSingleModel extends NestedPropertyModel {
    getOutputField(props: any): React.ReactElement<any, any> | null;
    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
}
