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
    var { modelItem, inheritedOptions, inheritedValue, variant = "standard", noLabel = true } = _a, rest = __rest(_a, ["modelItem", "inheritedOptions", "inheritedValue", "variant", "noLabel"]);
    const { id, label, cardinality } = modelItem;
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
        if (inheritedOptions) {
            setOptions(inheritedOptions);
        }
    }, [inheritedOptions]);
    useEffect(() => {
        if (inheritedValue !== null) {
            setValue(options[inheritedValue]);
        }
        else {
            setValue(null);
        }
    }, [inheritedValue, options]);
    const autocompleteOnChange = (item) => {
        if (cardinality === 1) {
            //console.log("value in autocomplete", item);options[0]
            setValue(item);
            rest.onChange(id, item.id);
        }
        else {
            setValue(item);
            rest.onChange(id, item.map(singleItem => singleItem.id));
        }
    };
    const getOptionLabel = (option) => {
        if (value === null) {
            return option["label"];
        }
        else {
            return option["label"];
        }
    };
    return _jsx(Autocomplete, Object.assign({ id: id }, rest, { value: value, inputValue: inputValue, disableClearable: true, options: options, onInputChange: (event, newInputValue) => {
            setInputValue(newInputValue);
        }, onChange: (event, value) => autocompleteOnChange(value), getOptionLabel: getOptionLabel, style: { width: "100%", minWidth: 150 }, renderInput: (params) => _jsx(TextField, Object.assign({}, params, { label: noLabel ? null : label, variant: variant }), void 0) }), void 0);
}
