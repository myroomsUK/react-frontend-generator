import { jsx as _jsx } from "react/jsx-runtime";
import ShowFileList from "../ShowFileList";
export default function ({ propertyRecord }) {
    console.log("propertyRecord", propertyRecord);
    return _jsx(ShowFileList, { filesList: propertyRecord }, void 0);
}
