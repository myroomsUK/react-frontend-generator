/// <reference types="react" />
import { NumberModel } from "../../../resource-models/propertyModels/NumberModel";
export interface NumberInput {
    model: NumberModel;
    onClick: (e: any) => void;
    value: any;
    hasError: boolean;
    id?: string;
    label?: string;
    errorMessage?: string;
    adornment?: any;
}
export default function ({ model, id, onClick, value, label }: NumberInput): JSX.Element;
