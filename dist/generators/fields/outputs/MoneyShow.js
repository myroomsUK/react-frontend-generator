import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from "@material-ui/core";
export default function MoneyShow({ record }) {
    const money = (record !== undefined) ? `£ ${record}` : "Amount not specified";
    return _jsx(Typography, { children: money }, void 0);
}
