import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from "@material-ui/core";
export default function MoneyShow({ record }) {
    // @ts-ignore
    const money = (record !== undefined) ? `£ ${parseInt(record) / 100}` : "Amount not specified";
    return _jsx(Typography, { children: money }, void 0);
}
