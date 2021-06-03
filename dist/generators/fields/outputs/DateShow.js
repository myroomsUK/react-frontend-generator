import { jsx as _jsx } from "react/jsx-runtime";
import { showDate } from "../../../utils/timeUtils";
export default function DateShow({ propertyRecord }) {
    return propertyRecord ? _jsx("div", { children: showDate(propertyRecord) }, void 0) : _jsx("div", { children: "No date specified" }, void 0);
}
