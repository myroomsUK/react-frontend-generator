/// <reference types="react" />
import { InputFields, PropertyModel } from "../PropertyModel";
import { Errors } from "../../generators/errors/Errors";
interface SingleErrors {
    hasError: boolean;
    errorMessage?: string;
}
export interface SinglePropertyInputFields extends SingleInputFields {
    hasError: boolean;
    errorMessage?: string;
}
export declare abstract class SinglePropertyModel extends PropertyModel {
    manipulateErrors(errors: Errors): SingleErrors;
    getInputField(props: InputFields): React.ReactElement<any, any> | null;
    getOutputField(props: any): React.ReactElement<any, any> | null;
}
interface SingleInputFields extends InputFields {
    inputHandler: (vars: any) => void;
    value: any;
    model: SinglePropertyModel;
}
export {};
