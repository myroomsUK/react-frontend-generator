/// <reference types="react" />
import { DateModel } from "../../../resource-models/propertyModels/DateModel";
export interface DateInput {
    model: DateModel;
    onClick: (e: any, value: any) => void;
    value: any;
    hasError: boolean;
    id?: string;
    name?: string;
    label?: string;
    errorMessage?: string;
    adornment?: any;
}
export default function ({ model, name, onClick, value, label }: DateInput): JSX.Element;
