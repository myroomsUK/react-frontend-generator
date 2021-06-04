import { jsx as _jsx } from "react/jsx-runtime";
import ShowFileList from "../ShowFileList";
export default function ({ record }) {
    return _jsx(ShowFileList, { filesList: Array.from(record.values()) }, void 0);
}
