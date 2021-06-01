/// <reference types="react" />
import { Operation } from "./Operation";
interface SimpleTableToolbarProps {
    numSelected: number;
    collectionOperations: Operation[];
    selected?: number[];
    setTable: any;
    allColumns: any[];
    title?: string;
    components?: any[];
    clearFilters?: () => void;
}
export declare const SimpleTableToolbar: ({ numSelected, selected, title, collectionOperations, components, clearFilters, setTable, allColumns }: SimpleTableToolbarProps) => JSX.Element;
export {};
