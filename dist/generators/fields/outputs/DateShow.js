import { jsx as _jsx } from "react/jsx-runtime";
import { showDate } from "../../../utils/timeUtils";
export default function DateShow({ record }) {
    return record ? _jsx("div", { children: showDate(record) }, void 0) : _jsx("div", { children: "No date specified" }, void 0);
}
