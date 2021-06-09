import React from "react";
import { EmbeddedPropertyModel } from "./NestedPropertyModel";
import { Record } from "../Record";
import { EmbeddedSingleSetInputFieldProps } from "../models/SetInputFieldProps";
import { EmbeddedSingleInputPropsInterface } from "../models/InputProps";
import { PropertyFieldConfigurationInterface } from "../configurations/PropertyFieldConfiguration";
export declare class EmbeddedSingleModel extends EmbeddedPropertyModel {
    setInputField(props: EmbeddedSingleSetInputFieldProps, configuration?: PropertyFieldConfigurationInterface): React.ReactElement<any, any> | null;
    getInputField(props: EmbeddedSingleInputPropsInterface, configuration?: PropertyFieldConfigurationInterface): React.ReactElement<any, any> | null;
    getOutputField(props: EmbeddedSingleInputPropsInterface, configuration?: PropertyFieldConfigurationInterface): React.ReactElement<any, any> | null;
    setOutputField(props: EmbeddedSingleSetInputFieldProps, configuration?: PropertyFieldConfigurationInterface): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
    getRecord(jsonValue: object): Record;
    getFormValue(value: Record): any;
}
