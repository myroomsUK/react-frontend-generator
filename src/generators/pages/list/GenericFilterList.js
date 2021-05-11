import {useGetResourceModel} from "../../../resource-models/modelsRegistry";
import {useTableFilters} from "../../filters/TableFilters";
import {useList} from "../../../redux/actions/verbs/list";
import React, {useState} from "react";
import {useDebouncedCallback} from "use-debounce";
import _ from "lodash";
import {GenericList} from "../ListPageGenerator";


export function useListHelpers(resourceName, filters){
    const {data, get, loading} = useList();
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);

    const getData = useDebouncedCallback(
        ()=>get(resourceName,page+1, filters),
        1000
    );
    return {page, setPage, selected, setSelected, data, loading, getData}
}


//const {filters, components, clearFilters} = useTableFilters(resourceName,lockedFilters);
export function GenericFilterList({resourceName, data, loading, page, setPage, selected, setSelected, components,clearFilters, itemOperations = [], collectionOperations = []}){
    const {model, title, table} = useGetResourceModel(resourceName)
    const headCells = table.map(({id, label}) => {return {propertyModel:model.getProperty(id), tableItemName:{id:id, label:label}}}).map(({propertyModel, tableItemName:{id, label}}) => {
        return { id: id, numeric:false, disablePadding:false, label: label};
    })

    const filterBarComponents = components.filter(component => !headCells.some(headCell => headCell.id === component.name))

    const showClearFilters = !!components.length;


    const columns = (row) => table.map(({id, label}) =>
    {
        const split = _.split(id, ".");
        const reducer = (start, value) => (start) ? start[value] : undefined;
        const record = split.reduce(reducer, row);
        const propertyModel = model.getProperty(id);
        propertyModel.label = label;
        return {propertyModel: propertyModel , record: record}
    }).map(({propertyModel, record}, localIndex) => {
        return propertyModel.getOutputField({propertyRecord:record});
        //return <GenericField table propertyRecord={record} propertyModel={propertyModel} resourceName={resourceName} originalId={row.id} />
    })

    return <GenericList
        data={data.list}
        totalItems={data.totalItems}
        loading={loading}
        page={page}
        setPage={setPage}
        selected={selected}
        setSelected={setSelected}
        title={title}
        clearFilters={clearFilters}
        filterBarComponents={filterBarComponents}
        showClearFilters={showClearFilters}
        components={components}
        columns={columns}
        headCells={headCells}
        itemOperations={itemOperations}
        collectionOperations={collectionOperations}
    />

}

