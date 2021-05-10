/// <reference types="react" />
import { BooleanModel } from "../../../resource-models/propertyModels/BooleanModel";
export interface BooleanInput {
    model: BooleanModel;
    onClick: (e: any) => void;
    value: any;
    hasError: boolean;
    checked: boolean;
    id?: string;
    name?: string;
    label?: string;
    errorMessage?: string;
    adornment?: any;
}
export default function BooleanInput({ model, name, onClick, checked, label, hasError, errorMessage }: BooleanInput): JSX.Element;
