/// <reference types="react" />
import { MoneyModel } from "../../../resource-models/propertyModels/MoneyModel";
export interface MoneyInput {
    model: MoneyModel;
    onClick: (e: any) => void;
    value: any;
    hasError: boolean;
    id?: string;
    label?: string;
    errorMessage?: string;
    adornment?: any;
}
export default function ({ model, id, label, onClick, value: integerValue }: MoneyInput): JSX.Element;
