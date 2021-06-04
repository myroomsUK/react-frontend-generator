import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from "@material-ui/core";
export default function MoneyShow({ propertyRecord }) {
    const value = (propertyRecord !== undefined) ? `£ ${propertyRecord}` : "Amount not specified";
    return _jsx(Typography, { children: value }, void 0);
}
