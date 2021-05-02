import { jsx as _jsx } from "react/jsx-runtime";
import { EditForm } from "./edit/EditFormGenerator";
import { useResource } from "../hooks/resourceUtils";
export const EditPage = ({ propResourceName: resourceName, propId, propEditPage }) => {
    const { record } = useResource(resourceName, propId);
    return _jsx(EditForm, { propResourceName: resourceName, propId: propId, record: record, propEditPage: propEditPage }, void 0);
};
