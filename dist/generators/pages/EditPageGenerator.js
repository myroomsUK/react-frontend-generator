import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGetOne } from "../../redux/actions/verbs/get_one";
import { EditForm } from "./edit/EditFormGenerator";
export const EditPage = ({ propResourceName: resourceName, propId, propEditPage }) => {
    const record = useEditPage(resourceName, propId);
    return _jsx(EditForm, { propResourceName: resourceName, propId: propId, record: record, propEditPage: propEditPage }, void 0);
};
export function useEditPage(resourceName, propId) {
    const initialValue = useRef({});
    const [record, setRecord] = useState(initialValue.current);
    const { data: downloadedRecord, getOne } = useGetOne();
    const getNewResource = useCallback(() => getOne(resourceName, propId), [resourceName, propId]);
    useEffect(() => getNewResource(), []);
    useEffect(() => {
        if (downloadedRecord !== undefined) {
            // @ts-ignore
            setRecord(downloadedRecord);
        }
    }, [downloadedRecord]);
    return record;
}
