export function ResourceList({ resourceName, filters: lockedFilters, itemOperations, collectionOperations }: {
    resourceName: any;
    filters: any;
    itemOperations?: any[] | undefined;
    collectionOperations?: any[] | undefined;
}): JSX.Element;
export function GenericList({ data, totalItems, loading, page, setPage, selected, setSelected, title, clearFilters, filterBarComponents, showClearFilters, components, itemOperations, collectionOperations, headCells, columns }: {
    data: any;
    totalItems: any;
    loading: any;
    page: any;
    setPage: any;
    selected: any;
    setSelected: any;
    title: any;
    clearFilters: any;
    filterBarComponents: any;
    showClearFilters: any;
    components: any;
    itemOperations?: any[] | undefined;
    collectionOperations?: any[] | undefined;
    headCells: any;
    columns: any;
}): JSX.Element;
