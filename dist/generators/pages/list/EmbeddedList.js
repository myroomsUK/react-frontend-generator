import { jsx as _jsx } from "react/jsx-runtime";
import { SmallList } from "./SmallList";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Record } from "../../../resource-models/Record";
export default function EmbeddedList({ model, title, data, totalItems, table, itemOperations }) {
    const [localModel, setLocalModel] = useState(model);
    const [page, setPage] = useState(0);
    useEffect(() => { setLocalModel(model); }, [model]); //Change model
    const headCells = useMemo(() => {
        return table
            .map(({ id, label }) => {
            return { propertyModel: model.getProperty(id), tableItemName: { id: id, label: label } };
        }).map(({ tableItemName: { id, label } }) => {
            return { id: id, numeric: false, disablePadding: false, label: label };
        });
    }, [table, model]);
    const getRowElement = (row, id, label, localModel) => {
        const record = Record.createFromJson(row, localModel);
        console.log("record", record);
        console.log("local miodel", localModel);
        const propertyModel = localModel.getProperty(id);
        propertyModel.label = label;
        return localModel.getOutputField(id, { model: localModel, record: record }, undefined, false);
    };
    const columns = useCallback((row) => table.map(({ id, label }) => {
        return getRowElement(row, id, label, localModel);
    }), [localModel, table]);
    return _jsx(SmallList, { title: title, data: data, totalItems: totalItems, headCells: headCells, columns: columns, page: page, setPage: setPage, itemOperations: itemOperations }, void 0);
}
