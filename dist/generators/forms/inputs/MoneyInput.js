import { jsx as _jsx } from "react/jsx-runtime";
// @ts-ignore
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
export default function ({ model, id = model.id, label = model.label, onClick, value }) {
    // @ts-ignore
    const localOnChange = (money) => onClick([id, money]);
    return (_jsx(CurrencyTextField, { label: label, variant: "outlined", fullWidth: true, currencySymbol: "\u00A3", value: value, minimumValue: "0", outputFormat: "number", decimalCharacter: ".", digitGroupSeparator: ",", onChange: (event, value) => localOnChange(value) }, void 0));
}
