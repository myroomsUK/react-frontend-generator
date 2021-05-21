import { jsx as _jsx } from "react/jsx-runtime";
import { showDate } from "../../../utils/timeUtils";
export default function DateShow({ propertyRecord }) {
    console.log("date record", propertyRecord);
    return _jsx("div", { children: showDate(propertyRecord) }, void 0);
}
