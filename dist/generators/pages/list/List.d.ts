export function GenericList({ data: rows, totalItems, page, setPage, selected, setSelected, title, itemOperations, collectionOperations, headCells, columns, allColumns, setTable }: {
    data: any;
    totalItems: any;
    page: any;
    setPage: any;
    selected: any;
    setSelected: any;
    title: any;
    itemOperations?: any[] | undefined;
    collectionOperations?: any[] | undefined;
    headCells: any;
    columns: any;
    allColumns: any;
    setTable: any;
}): JSX.Element;
