import { jsx as _jsx } from "react/jsx-runtime";
import ShowFileList from "../ShowFileList";
export default function ({ propertyRecord }) {
    return _jsx(ShowFileList, { filesList: Array.from(propertyRecord.values()) }, void 0);
}
