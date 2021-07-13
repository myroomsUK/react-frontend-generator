import { InputFields, PropertyModel } from "../PropertyModel";
import { Errors } from "../../generators/errors/Errors";
import { PropertyFieldConfiguration } from "../configurations/PropertyFieldConfiguration";
import React from "react";
export declare class IdModel extends PropertyModel {
    setInputField(props: InputFields): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
    setOutputField(props: any): React.ReactElement<any, any> | null;
    manipulateErrors(errors: Errors): any;
    getInputField(props: InputFields): React.ReactElement<any, any> | null;
    getOutputField(props: any, { viewElement }: PropertyFieldConfiguration): React.ReactElement<any, any> | null;
    getRecord(jsonValue: any): any;
    getFormValue(value: any): any;
    getJsonFormValue(value: any): any;
}
