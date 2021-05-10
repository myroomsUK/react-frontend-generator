import { jsx as _jsx } from "react/jsx-runtime";
import { TextValidator } from "react-material-ui-form-validator";
import { useEffect, useState } from "react";
export default function ({ model, id = model.id, onClick, value, label = model.label }) {
    const [localValue, setLocalValue] = useState(0);
    useEffect(() => { setLocalValue(value); }, [value]);
    const localOnChange = (event) => {
        const target = event.target;
        let value = target.value;
        setLocalValue(parseInt(value));
        onClick(event);
    };
    return _jsx(TextValidator, { label: label, onChange: localOnChange, value: localValue, style: { width: "100%" }, type: "number", name: id }, void 0);
}
