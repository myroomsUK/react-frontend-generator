import { PropertyModel } from "../PropertyModel";
import { Errors } from "../../generators/errors/Errors";
import React from "react";
import { SingleInputPropsInterface } from "../models/InputProps";
import { PropertyFieldConfiguration } from "../configurations/PropertyFieldConfiguration";
interface SingleErrors {
    hasError: boolean;
    errorMessage?: string;
}
export declare abstract class SinglePropertyModel extends PropertyModel {
    manipulateErrors(errors: Errors): SingleErrors;
    getInputField(props: SingleInputPropsInterface, configuration?: PropertyFieldConfiguration): React.ReactElement<any, any> | null;
    getOutputField(props: SingleInputPropsInterface, configuration?: PropertyFieldConfiguration): React.ReactElement<any, any> | null;
    getFormValue(value: any): any;
}
export {};
