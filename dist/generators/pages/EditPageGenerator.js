import { jsx as _jsx } from "react/jsx-runtime";
import { EditForm } from "./edit/EditFormGenerator";
import { useResource } from "../hooks/resourceUtils";
/**
 * This component is entitled to create a form and populate it with data
 * @param resourceName Resource that we get from the model
 * @param propId which id
 * @param propEditPage custom page
 * @param isEdit
 * @constructor
 */
export const EditPage = ({ propResourceName: resourceName, propId, propEditPage, isEdit = true }) => {
    const { record, getNewResource } = useResource(resourceName, propId);
    return _jsx(EditForm, { isEdit: isEdit, propResourceName: resourceName, propId: propId, record: record, refresh: getNewResource, propEditPage: propEditPage }, void 0);
};
