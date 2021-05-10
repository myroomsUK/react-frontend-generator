import { ChangeEventHandler } from "react";
import { Model } from "../../resource-models/Model";
interface Props {
    model: Model;
    modelFilters: any;
    inputFieldOnChange: (e: any) => ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> | undefined;
    referencesMap: any;
    filterValue: any;
}
export declare const GenericFilterArray: ({ model, modelFilters, inputFieldOnChange, referencesMap, filterValue }: Props) => never[];
export {};
