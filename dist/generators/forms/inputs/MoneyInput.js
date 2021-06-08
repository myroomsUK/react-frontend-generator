import { jsx as _jsx } from "react/jsx-runtime";
// @ts-ignore
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { useEffect, useState } from "react";
export default function ({ model, id = model.id, label = model.label, onClick, value: integerValue }) {
    const [localValue, setLocalValue] = useState(0);
    useEffect(() => {
        var _a;
        const newValue = (_a = integerValue / 100) !== null && _a !== void 0 ? _a : 0;
        console.log("new value", newValue);
        setLocalValue(newValue);
    }, [integerValue]);
    // @ts-ignore
    const localOnChange = (money) => {
        console.log("money", money);
        onClick([id, money * 100]);
    };
    return (_jsx(CurrencyTextField, { label: label, variant: "outlined", fullWidth: true, currencySymbol: "\u00A3", value: localValue, minimumValue: "0", outputFormat: "number", decimalCharacter: ".", digitGroupSeparator: ",", onChange: (event, value) => localOnChange(value) }, void 0));
}
