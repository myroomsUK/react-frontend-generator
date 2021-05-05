export function useListHelpers(resourceName: any, filters: any): {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    selected: never[];
    setSelected: React.Dispatch<React.SetStateAction<never[]>>;
    data: {
        list: never[];
        totalItems: number;
    };
    loading: boolean;
    getData: import("use-debounce/lib/useDebouncedCallback").DebouncedState<() => Promise<void | {
        data: any;
        totalItems: any;
    }>>;
};
export function GenericFilterList({ resourceName, data, loading, page, setPage, selected, setSelected, filters: lockedFilters, itemOperations, collectionOperations }: {
    resourceName: any;
    data: any;
    loading: any;
    page: any;
    setPage: any;
    selected: any;
    setSelected: any;
    filters: any;
    itemOperations?: any[] | undefined;
    collectionOperations?: any[] | undefined;
}): JSX.Element;
import React from "react";
