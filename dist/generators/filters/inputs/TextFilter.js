import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useDebouncedCallback } from "use-debounce";
export default function TextFilter({ name, label, type, inputFieldOnChange, value }) {
    const [localValue, setLocalValue] = useState("");
    const debounced = useDebouncedCallback(inputFieldOnChange(), 500);
    useEffect(() => {
        const newValue = (value) ? value : "";
        setLocalValue(newValue);
    }, [value]);
    const localOnChange = (event) => {
        const target = event.target;
        let value = target.value;
        setLocalValue(value);
        debounced(event);
    };
    return _jsx(React.Fragment, { children: _jsx(TextField, { label: label, id: name, name: name, value: localValue, onChange: localOnChange }, void 0) }, name);
}
