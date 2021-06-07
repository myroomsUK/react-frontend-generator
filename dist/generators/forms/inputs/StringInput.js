import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { CustomTextValidator } from "../formHelpers";
export const StringInput = ({ model, id = model.id, label = model.label, onClick, value, hasError, errorMessage, adornment }) => {
    console.log("value", value);
    const [localValue, setLocalValue] = useState("");
    useEffect(() => setLocalValue(value), [value]);
    const debounced = useDebouncedCallback(onClick, 1000);
    const localOnChange = (event) => {
        const target = event.target;
        let value = target.value;
        setLocalValue(value);
        debounced(event);
    };
    return _jsx(CustomTextValidator, { id: id, name: id, label: label, onChange: localOnChange, value: localValue, autoComplete: "nope", error: hasError, errorMessage: errorMessage, variant: "outlined", style: { width: "100%" }, InputProps: {
            startAdornment: adornment
        } }, void 0);
};
