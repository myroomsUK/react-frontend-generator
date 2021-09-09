import React from "react";
import { EmbeddedPropertyModel } from "./NestedPropertyModel";
import { Record } from "../Record";
import { EmbeddedMultipleInputPropsInterface } from "../models/InputProps";
import { EmbeddedMultipleSetInputFieldProps } from "../models/SetInputFieldProps";
import { PropertyFieldConfigurationInterface } from "../configurations/PropertyFieldConfiguration";
import { EmbeddedSingleModel } from "./EmbeddedSingleModel";
export declare class EmbeddedMultipleModel extends EmbeddedPropertyModel {
    setInputField(props: EmbeddedMultipleSetInputFieldProps, configuration?: PropertyFieldConfigurationInterface): React.ReactElement<any, any> | null;
    getInputField(props: EmbeddedMultipleInputPropsInterface, configuration?: PropertyFieldConfigurationInterface): React.ReactElement<any, any> | null;
    getInputOnChangeHandler({ formValue, setFormValue }: any): (vars: any) => void;
    getOutputField(props: EmbeddedMultipleInputPropsInterface, configuration?: PropertyFieldConfigurationInterface): React.ReactElement<any, any> | null;
    setOutputField({ record, model, setFormValue, loading, formValue, errors, referencesMap, refreshReferencesMap, refresh, partialSubmitHandler, submitHandler }: EmbeddedMultipleSetInputFieldProps, configuration?: PropertyFieldConfigurationInterface): React.ReactElement<any, any> | null;
    getRecord(jsonValue: any[]): Map<number, Record>;
    getFormValue(value: Map<string, Record>): any;
    getEmbeddedSingleModel(id: string): EmbeddedSingleModel;
}
