/// <reference types="react" />
import { PhoneModel } from "../../../resource-models/propertyModels/PhoneModel";
export interface PhoneInput {
    model: PhoneModel;
    onClick: (e: any) => void;
    value: any;
    hasError: boolean;
    id?: string;
    label?: string;
    errorMessage?: string;
    adornment?: any;
}
export default function ({ label, model, hasError, errorMessage, onClick, value, adornment, ...rest }: PhoneInput): JSX.Element;
