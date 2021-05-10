import React from "react";
import { EmbeddedInputFields, NestedPropertyModel } from "./NestedPropertyModel";
export declare class EmbeddedMultipleModel extends NestedPropertyModel {
    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
    getOutputField(props: any): React.ReactElement<any, any> | null;
}
