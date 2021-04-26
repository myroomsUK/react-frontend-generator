var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
export default function (_a) {
    var { onClick, value } = _a, rest = __rest(_a, ["onClick", "value"]);
    const localOnChange = (money) => onClick(rest.id, money);
    return (_jsx(CurrencyTextField, { label: rest.label, variant: "outlined", fullWidth: true, currencySymbol: "\u00A3", value: value, minimumValue: "0", outputFormat: "number", decimalCharacter: ".", digitGroupSeparator: ",", onChange: (event, value) => localOnChange(value) }, void 0));
}
