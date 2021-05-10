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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextValidator } from "react-material-ui-form-validator";
export function EnumInput({ model, options, inheritedValue, onChange }) {
    const { id, label } = useMemo(() => { return model; }, [model]);
    const [localOptions, setLocalOptions] = useState([]);
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState("");
    useEffect(() => {
        setLocalOptions(options);
    }, [options]);
    useEffect(() => {
        const valuePositionInOptions = getAutocompleteValuePosition(inheritedValue, localOptions);
        const localOptionsLengthCondition = localOptions.length !== 0;
        if (valuePositionInOptions !== -1 && localOptionsLengthCondition) {
            setValue(localOptions[valuePositionInOptions]);
        }
    }, [localOptions]);
    const autocompleteOnChange = (item) => onChange(id, parseInt(item.id));
    return _jsx(_Fragment, { children: _jsx(Autocomplete, { value: value, inputValue: inputValue, disableClearable: true, options: localOptions, onInputChange: (event, newInputValue) => setInputValue(newInputValue), onChange: (event, value) => autocompleteOnChange(value), getOptionLabel: (option) => option["label"], renderOption: (option) => (option.button) ? option.button : _jsx("div", { children: option.label }, void 0), style: { width: "100%" }, label: label, renderInput: (_a) => {
                var params = __rest(_a, []);
                return _jsx(TextValidator, Object.assign({}, params, { variant: "outlined", value: value, label: label, style: { width: "100%" }, autoComplete: "nope" }), void 0);
            } }, void 0) }, void 0);
}
/**
 * @param {int} value
 * @param {array} options
 * @returns {int}
 */
export function getAutocompleteValuePosition(value, options) {
    return options.indexOf(options.find(option => parseInt(option.id) === value));
}
