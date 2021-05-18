import { jsx as _jsx } from "react/jsx-runtime";
import { useResource } from "../hooks/resourceUtils";
import { Show } from "./show/Show";
/**
 * This component is entitled to create a form and populate it with data
 * @param resourceName Resource that we get from the model
 * @param propId which id
 * @param propShowPage custom page
 * @constructor
 */
export const ShowPage = ({ propResourceName, propId, propShowPage }) => {
    const { record } = useResource(propResourceName, propId);
    return _jsx(Show, { propResourceName: propResourceName, propId: propId, record: record, propShowPage: propShowPage }, void 0);
};
