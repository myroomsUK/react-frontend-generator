import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from "@material-ui/core";
export default function MoneyShow({ value }) {
    const money = (value !== undefined) ? `£ ${value}` : "Amount not specified";
    return _jsx(Typography, { children: money }, void 0);
}
