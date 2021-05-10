import { jsx as _jsx } from "react/jsx-runtime";
import { TextValidator } from "react-material-ui-form-validator";
import { useEffect, useState } from "react";
import { getDateInputFormat } from "../../../utils/timeUtils";
export default function ({ model, name = model.id, onClick, value, label = model.label }) {
    const [localValue, setLocalvalue] = useState(getDateInputFormat());
    const localChange = (event) => {
        const target = event.target;
        let value = target.value;
        const name = target.id;
        onClick(name, value);
    };
    useEffect(() => {
        if (value === undefined) {
            const nwValue = getDateInputFormat();
            setLocalvalue(nwValue);
        }
        else {
            setLocalvalue(value);
        }
    }, [value]);
    return _jsx(TextValidator, { name: name, label: label, onChange: localChange, value: localValue, style: { width: "100%" }, type: "date" }, void 0);
}
