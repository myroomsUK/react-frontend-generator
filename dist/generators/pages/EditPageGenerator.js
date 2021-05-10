import { jsx as _jsx } from "react/jsx-runtime";
import { EditForm } from "./edit/EditFormGenerator";
import { useResource } from "../hooks/resourceUtils";
/**
 * This component is entitled to create a form and populate it with data
 * @param resourceName Resource that we get from the model
 * @param propId which id
 * @param propEditPage custom page
 * @constructor
 */
export const EditPage = ({ propResourceName: resourceName, propId, propEditPage }) => {
    const { record } = useResource(resourceName, propId);
    return _jsx(EditForm, { propResourceName: resourceName, propId: propId, record: record, propEditPage: propEditPage }, void 0);
};
