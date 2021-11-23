import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import MyCkEditor from "./CkEditor/MyCkEditor";
import { Grid } from "@material-ui/core";
export const TextareaInput = ({ model, label = model.label, onClick, value, hasError, errorMessage, adornment }) => {
    const [localValue, setLocalValue] = useState(value);
    useEffect(() => {
        if (value) {
            setLocalValue(value);
        }
    }, [value]);
    const debounced = useDebouncedCallback(onClick, 1000);
    const localOnChange = (data) => {
        setLocalValue(data);
        debounced(data);
    };
    return _jsxs(Grid, Object.assign({ container: true, spacing: 2 }, { children: [_jsx(Grid, Object.assign({ item: true, xs: 12 }, { children: label }), void 0), _jsx(Grid, Object.assign({ item: true, xs: 12 }, { children: _jsx(MyCkEditor, { value: localValue, onChange: localOnChange }, void 0) }), void 0)] }), void 0);
};
