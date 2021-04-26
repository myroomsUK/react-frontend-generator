import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { CustomTextValidator } from "../formHelpers";
export const StringInput = ({ model, label, onClick, value, hasError, errorMessage, adornment }) => {
    const [localValue, setLocalValue] = useState(value);
    useEffect(() => setLocalValue(value), [value]);
    const debounced = useDebouncedCallback(onClick, 1000);
    const localOnChange = (event) => {
        const target = event.target;
        let value = target.value;
        setLocalValue(value);
        debounced(event);
    };
    return _jsx(CustomTextValidator, { autoComplete: "nope", error: hasError, name: model.id, id: model.id, errorMessage: errorMessage, variant: "outlined", label: label, onChange: localOnChange, value: localValue, style: { width: "100%" }, InputProps: {
            startAdornment: adornment
        } }, void 0);
};
