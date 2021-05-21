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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useMemo, useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeResourceBuffer } from "../../../redux/actions/app/actions";
import ReferenceInputModal from "./ReferenceInputModal/ReferenceInputModal";
class ReferenceInputOption {
    constructor(id, label, button) {
        this.id = id;
        this.label = label;
        this.button = button;
    }
    static createFromListingOption(listingOption) {
        return new ReferenceInputOption(listingOption.id, listingOption.label);
    }
    toMap() {
        return new Map().set('id', this.id).set('label', this.label);
    }
}
export default function ({ model, refreshReferencesMap, inheritedValue, createNew = true, onChange }) {
    const { id, label, resourceName: modalResourceName } = useMemo(() => { return model; }, [model]);
    const [open, setOpen] = React.useState(false);
    const [localOptions, setLocalOptions] = useState([]);
    // @ts-ignore
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState("");
    // @ts-ignore
    const { listings } = useSelector(({ appReducer }) => appReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (modalResourceName) {
            dispatch(changeResourceBuffer(modalResourceName));
        }
    }, []);
    const handleOpen = (e) => {
        e.stopPropagation();
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        refreshReferencesMap();
    };
    useEffect(() => {
        var _a, _b;
        const options = (_b = (_a = listings.get(model.resourceName)) === null || _a === void 0 ? void 0 : _a.options) !== null && _b !== void 0 ? _b : [];
        const referenceOptions = options.map((option) => ReferenceInputOption.createFromListingOption(option));
        setLocalOptions((value) => (createNew) ? [new ReferenceInputOption(0, "", _jsx(Button, Object.assign({ style: { width: "100%" }, onClick: handleOpen }, { children: "Add a new one" }), void 0)), ...referenceOptions] : [...referenceOptions]);
    }, [listings]);
    useEffect(() => {
        const valuePositionInOptions = getAutocompleteValuePosition(inheritedValue, localOptions);
        const localOptionsLengthCondition = (createNew) ? localOptions.length !== 1 : localOptions.length !== 0;
        const truePosition = (createNew) ? valuePositionInOptions : valuePositionInOptions - 1;
        if (valuePositionInOptions !== -1 && localOptionsLengthCondition) {
            setValue(localOptions[truePosition]);
        }
    }, [localOptions, inheritedValue, createNew]);
    const autocompleteOnChange = (item) => onChange([id, item]);
    return _jsxs(_Fragment, { children: [_jsx(Autocomplete, { value: value, inputValue: inputValue, disableClearable: true, options: localOptions, onInputChange: (event, newInputValue) => setInputValue(newInputValue), onChange: (event, newInputvalue) => autocompleteOnChange(newInputvalue), getOptionLabel: (option) => option.label, renderOption: (option) => (option.button) ? option.button : _jsx("div", { children: option.label }, void 0), style: { width: "100%" }, 
                //TODO addlabel
                renderInput: (_a) => {
                    var params = __rest(_a, []);
                    return _jsx(TextValidator, Object.assign({}, params, { id: model.id, name: model.id, variant: "outlined", value: value, label: label, style: { width: "100%" }, autoComplete: "nope" }), void 0);
                } }, void 0),
            _jsx(ReferenceInputModal, { open: open, handleClose: handleClose, resourceName: modalResourceName }, void 0)] }, void 0);
}
/**
 * @param {int} value
 * @param {array} options
 * @returns {int}
 */
export function getAutocompleteValuePosition(value, options) {
    if (value) {
        // @ts-ignore
        const correctOption = options.find((option) => option.id === value.id);
        return (correctOption) ? options.indexOf(correctOption) : -1;
    }
    else {
        return -1;
    }
}
