import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useEffect, useState } from "react";
import FormHelperText from "@material-ui/core/FormHelperText";
import { FormControl } from "@material-ui/core";
export default function BooleanInput({ model, name = model.id, onClick, checked, label = model.label, hasError, errorMessage }) {
    const [localError, setLocalError] = useState(false);
    const [localErrorMessage, setLocalErrorMessage] = useState("");
    useEffect(() => {
        if (hasError !== undefined) {
            setLocalError(hasError);
        }
        if (errorMessage) {
            setLocalErrorMessage(errorMessage);
        }
    }, [hasError, errorMessage]);
    const onClickHandler = (e) => {
        setLocalError(false);
        setLocalErrorMessage("");
        onClick(e);
    };
    return _jsxs(FormControl, { children: [_jsx(FormControlLabel, { control: _jsx(Checkbox, { id: name, name: name, onClick: onClickHandler, checked: checked }, void 0), label: label }, void 0),
            _jsx(FormHelperText, { children: localErrorMessage }, void 0)] }, void 0);
}
