import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { MyAutocomplete } from "./MyAutocomplete";
export default function ReferenceMultipleFilter({ text, options, modelItem, inputFieldOnChange, inheritedValue }) {
    const valuePositionInOptions = getAutocompleteMultipleValuePosition(inheritedValue !== null && inheritedValue !== void 0 ? inheritedValue : [], options);
    console.log(valuePositionInOptions);
    return _jsx(React.Fragment, { children: _jsx(ListItem, { children: _jsx(MyAutocomplete, { multiple: true, size: "small", onChange: inputFieldOnChange("reference"), modelItem: modelItem, inheritedOptions: options, inheritedValue: valuePositionInOptions }, void 0) }, void 0) }, text);
}
export function getAutocompleteMultipleValuePosition(values, options) {
    const reducer = (accumulator, value) => {
        const index = options.indexOf(options.find(option => option.id === value));
        return [...accumulator, index];
    };
    return values.reduce(reducer, []);
}
