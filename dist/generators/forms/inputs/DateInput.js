import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { getDateInputFormat } from "../../../utils/timeUtils";
import { CustomTextValidator } from "../formHelpers";
export default function ({ model, name = model.id, onClick, value, label = model.label, hasError, errorMessage }) {
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
    return _jsx(CustomTextValidator, { name: name, error: hasError, errorMessage: errorMessage, label: label, onChange: onClick, value: localValue, style: { width: "100%" }, type: "date" }, void 0);
}
