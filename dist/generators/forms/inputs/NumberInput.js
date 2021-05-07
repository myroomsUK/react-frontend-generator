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
import { TextValidator } from "react-material-ui-form-validator";
export default function (_a) {
    var { name, onClick, value, label } = _a, rest = __rest(_a, ["name", "onClick", "value", "label"]);
    const trueValue = (value !== undefined) ? parseInt(value) : 0;
    return _jsx(TextValidator, { label: label, onChange: onClick, value: trueValue, style: { width: "100%" }, type: "number" }, void 0);
}
