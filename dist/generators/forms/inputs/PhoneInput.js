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
import MuiPhoneInput from 'material-ui-phone-number';
export default function (_a) {
    var { label, model, error, errorMessage, onClick, value, adornment } = _a, rest = __rest(_a, ["label", "model", "error", "errorMessage", "onClick", "value", "adornment"]);
    const localOnChange = (value) => onClick(rest.id, value);
    return _jsx(MuiPhoneInput, { defaultCountry: 'gb', variant: "outlined", value: value, fullWidth: true, onChange: localOnChange }, void 0);
}
