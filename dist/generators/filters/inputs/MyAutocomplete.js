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
import { useEffect, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
export function MyAutocomplete(_a) {
    var { modelItem, inheritedOptions, inheritedValue, variant = "standard", noLabel = true, multiple = false } = _a, rest = __rest(_a, ["modelItem", "inheritedOptions", "inheritedValue", "variant", "noLabel", "multiple"]);
    const { id, label } = modelItem;
    const [value, setValue] = useState((multiple) ? [] : null);
    const [localOptions, setLocalOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
        if (inheritedOptions) {
            setLocalOptions(inheritedOptions);
        }
    }, [inheritedOptions]);
    useEffect(() => {
        const localOptionsLengthCondition = localOptions.length !== 0;
        if (multiple) {
            const existingPositions = inheritedValue.filter((position) => position !== -1);
            setValue(existingPositions.map((truePosition) => localOptions[truePosition]));
        }
        else {
            if (inheritedValue !== -1 && localOptionsLengthCondition) {
                setValue(localOptions[inheritedValue]);
            }
        }
    }, [inheritedValue, localOptions]);
    const autocompleteOnChange = (item) => {
        if (multiple) {
            setValue(item);
            rest.onChange(id, item.map(singleItem => singleItem.id));
        }
        else {
            setValue(item);
            rest.onChange(id, item.id);
        }
    };
    return _jsx(Autocomplete, { id: id, value: value, inputValue: inputValue, multiple: multiple, disableClearable: true, options: localOptions, onInputChange: (event, newInputValue) => {
            setInputValue(newInputValue);
        }, onChange: (event, value) => autocompleteOnChange(value), getOptionLabel: (option) => option["label"], style: { width: "100%", minWidth: 150 }, renderInput: (params) => _jsx(TextField, Object.assign({}, params, { variant: variant, label: "" }), void 0) }, void 0);
}
