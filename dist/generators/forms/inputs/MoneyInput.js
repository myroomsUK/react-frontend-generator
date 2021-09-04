var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
// @ts-ignore
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { useEffect, useState } from "react";
import NumberFormat from 'react-number-format';
export default function ({ model, id = model.id, label = model.label, onClick, value: integerValue }) {
    const [localValue, setLocalValue] = useState(0.00);
    useEffect(() => {
        var _a;
        const newValue = (_a = integerValue / 100) !== null && _a !== void 0 ? _a : 0;
        setLocalValue(newValue);
    }, [integerValue]);
    // @ts-ignore
    const localOnChange = (money) => {
        onClick([id, money * 100]);
    };
    /*return <CustomTextValidator
        label={label}
        variant={"outlined"}
        value={localValue}
        onChange={(event: any) => localOnChange(event.target.value)}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
            inputComponent: NumberFormatCustom as any,
        }} error={undefined} errorMessage={undefined}    />*/
    return (_jsx(CurrencyTextField, { label: label, variant: "outlined", fullWidth: true, currencySymbol: "\u00A3", value: localValue, minimumValue: "0", outputFormat: "number", decimalCharacter: ".", digitGroupSeparator: ",", onChange: (event, value) => localOnChange(value) }, void 0));
}
function NumberFormatCustom(props) {
    const { inputRef, onChange } = props, other = __rest(props, ["inputRef", "onChange"]);
    return (_jsx(NumberFormat, Object.assign({}, other, { getInputRef: inputRef, onValueChange: (values) => {
            onChange({
                target: {
                    name: props.name,
                    value: values.value,
                },
            });
        }, thousandSeparator: true, isNumericString: true, prefix: "$" }), void 0));
}
