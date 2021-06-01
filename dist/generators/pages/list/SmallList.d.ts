import React from "react";
import { Operation } from "./listHelpers/Operation";
export interface SmallListProps {
    data: any[];
    totalItems: number;
    headCells: any[];
    columns: (row: any) => React.DetailedReactHTMLElement<any, any>[];
    page: number;
    setPage: any;
    selected?: number[];
    setSelected?: any;
    title?: string;
    itemOperations?: Operation[];
    collectionOperations?: Operation[];
    allColumns?: any[];
    setTable?: any;
    noToolbar?: boolean;
}
export declare const SmallList: React.FC<SmallListProps>;
