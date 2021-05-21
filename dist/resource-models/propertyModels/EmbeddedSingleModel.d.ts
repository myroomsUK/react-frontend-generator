import React from "react";
import { EmbeddedInputFields, EmbeddedPropertyModel, EmbeddedSingleOutputFields } from "./NestedPropertyModel";
export declare class EmbeddedSingleModel extends EmbeddedPropertyModel {
    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null;
    setOutputField(props: EmbeddedSingleOutputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
}
