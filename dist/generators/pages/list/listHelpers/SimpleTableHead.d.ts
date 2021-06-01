import React from "react";
export declare type Direction = "asc" | "desc" | undefined;
interface Props {
    headCells: any[];
    filters?: any[];
    numSelected: number;
    rowCount: number;
    classes?: any;
    onSelectAllClick: any;
    order: Direction;
    orderBy: string;
    onRequestSort: any;
    useSelect: boolean;
}
export declare const SimpleTableHead: React.FC<Props>;
export {};
