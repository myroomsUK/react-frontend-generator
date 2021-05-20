import React from "react";
import { EmbeddedInputFields, EmbeddedOutputFields, EmbeddedPropertyModel } from "./NestedPropertyModel";
export declare class EmbeddedSingleModel extends EmbeddedPropertyModel {
    setInputField(props: EmbeddedInputFields): React.ReactElement<any, any> | null;
    setOutputField(props: EmbeddedOutputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
}
