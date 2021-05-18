/// <reference types="react" />
import { Model } from "../../resource-models/Model";
interface Props {
    model: Model;
    modelFilters: any;
    filters: any;
    setFilters: any;
}
export declare const FilterList: ({ model, modelFilters, filters, setFilters }: Props) => (JSX.Element | {
    name: string;
    type: string;
    component: JSX.Element;
} | {
    name: string;
    component: JSX.Element;
    type?: undefined;
})[];
export {};
