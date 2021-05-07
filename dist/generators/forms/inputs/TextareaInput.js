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
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { CustomTextValidator } from "../formHelpers";
export const TextareaInput = (_a) => {
    var { model, label, onClick, value, hasError, errorMessage, adornment } = _a, rest = __rest(_a, ["model", "label", "onClick", "value", "hasError", "errorMessage", "adornment"]);
    const [localValue, setLocalValue] = useState(value);
    useEffect(() => setLocalValue(value), [value]);
    const debounced = useDebouncedCallback(onClick, 1000);
    const localOnChange = (event) => {
        const target = event.target;
        let value = target.value;
        setLocalValue(value);
        debounced(event);
    };
    return _jsx(CustomTextValidator, { autoComplete: "nope", error: hasError, name: model.id, id: model.id, errorMessage: errorMessage, variant: "outlined", label: label, onChange: localOnChange, value: localValue, style: { width: "100%" }, multiline: true, rows: 4, InputProps: {
            startAdornment: adornment
        } }, void 0);
};
