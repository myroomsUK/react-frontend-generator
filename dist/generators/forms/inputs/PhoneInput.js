import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
// @ts-ignore
import MuiPhoneInput from 'material-ui-phone-number';
export default function ({ label, model, hasError, errorMessage, onClick, value, adornment }) {
    const [localError, setLocalError] = useState(false);
    const [localErrorMessage, setLocalErrorMessage] = useState();
    useEffect(() => {
        if (hasError !== undefined) {
            setLocalError(hasError);
        }
        if (errorMessage) {
            // @ts-ignore
            setLocalErrorMessage(errorMessage);
        }
    }, [hasError, errorMessage]);
    const onClickHandler = (event) => {
        setLocalError(false);
        setLocalErrorMessage(undefined);
        if (onClick) {
            onClick(event);
        }
    };
    const localOnChange = (value) => {
        // @ts-ignore
        onClick([model.id, value]);
    };
    return _jsx(MuiPhoneInput, { defaultCountry: 'gb', variant: "outlined", value: value, error: localError, helperText: localErrorMessage, fullWidth: true, onChange: localOnChange, onClick: onClickHandler }, void 0);
}
