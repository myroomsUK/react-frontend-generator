import { jsx as _jsx } from "react/jsx-runtime";
import { showDate } from "../../../utils/timeUtils";
export default function DateShow({ propertyRecord }) {
    return _jsx("div", { children: showDate(propertyRecord) }, void 0);
}
