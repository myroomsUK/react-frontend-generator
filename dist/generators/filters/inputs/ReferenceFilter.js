import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import { MyAutocomplete } from "./MyAutocomplete";
export default function ReferenceFilter({ text, options, modelItem, inputFieldOnChange, inheritedValue }) {
    const initialIndex = (options !== null && options !== void 0 ? options : []).indexOf((options !== null && options !== void 0 ? options : []).find(option => option.id === inheritedValue));
    const inheritedValuePosition = (initialIndex === -1) ? null : initialIndex;
    return _jsx(React.Fragment, { children: _jsx(ListItem, { children: _jsx(MyAutocomplete, { size: "small", onChange: inputFieldOnChange("reference"), modelItem: modelItem, inheritedOptions: options, inheritedValue: inheritedValuePosition }, void 0) }, void 0) }, text);
}
