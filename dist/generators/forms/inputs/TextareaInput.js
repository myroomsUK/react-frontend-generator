import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import MyCkEditor from "./CkEditor/MyCkEditor";
export const TextareaInput = ({ model, label = model.label, onClick, value, hasError, errorMessage, adornment }) => {
    const [localValue, setLocalValue] = useState("");
    useEffect(() => {
        setLocalValue(value !== null && value !== void 0 ? value : "");
    }, [value]);
    const debounced = useDebouncedCallback(onClick, 1000);
    const localOnChange = (data) => {
        setLocalValue(data);
        debounced(data);
    };
    return _jsx(MyCkEditor, { value: localValue, onChange: localOnChange }, void 0);
};
