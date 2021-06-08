import { jsx as _jsx } from "react/jsx-runtime";
import { showDate } from "../../../utils/timeUtils";
import { Typography } from "@material-ui/core";
export default function DateShow({ record }) {
    return record ? _jsx(Typography, { children: showDate(record) }, void 0) : _jsx(Typography, { children: "No date specified" }, void 0);
}
