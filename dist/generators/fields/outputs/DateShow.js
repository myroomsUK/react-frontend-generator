import { jsx as _jsx } from "react/jsx-runtime";
import { showDate } from "../../../utils/timeUtils";
export default function DateShow({ value }) {
    return value ? _jsx("div", { children: showDate(value) }, void 0) : _jsx("div", { children: "No date specified" }, void 0);
}
