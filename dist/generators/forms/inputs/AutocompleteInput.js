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
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { changeResourceBuffer } from "../../../redux/actions/app/actions";
import { Create } from "../../pages/CreatePageGenerator";
export function AutocompleteInput({ model, refreshReferencesMap, inheritedValue, createNew = true, onChange }) {
    const { id, label, resourceName: modalResourceName, optionText: optionTextModelItem } = useMemo(() => { return model; }, [model]);
    const [open, setOpen] = React.useState(false);
    const [localOptions, setLocalOptions] = useState([]);
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const { listings } = useSelector(({ appReducer }) => appReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (modalResourceName) {
            console.log("dispatch change resource buffer");
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
        var _a;
        const options = (_a = listings.get(model.resourceName)) !== null && _a !== void 0 ? _a : [];
        setLocalOptions((value) => (createNew) ? [{ button: _jsx(Button, Object.assign({ style: { width: "100%" }, onClick: handleOpen }, { children: "Add a new one" }), void 0), label: "" }, ...options] : [...options]);
    }, [listings]);
    useEffect(() => {
        const valuePositionInOptions = getAutocompleteValuePosition(inheritedValue, localOptions);
        const localOptionsLengthCondition = (createNew) ? localOptions.length !== 1 : localOptions.length !== 0;
        const truePosition = (createNew) ? valuePositionInOptions + 1 : valuePositionInOptions;
        if (valuePositionInOptions !== -1 && localOptionsLengthCondition) {
            setValue(localOptions[truePosition]);
        }
    }, [localOptions, createNew]);
    const autocompleteOnChange = onChange;
    return _jsxs(_Fragment, { children: [_jsx(Autocomplete, { value: value, inputValue: inputValue, disableClearable: true, options: localOptions, onInputChange: (event, newInputValue) => setInputValue(newInputValue), onChange: autocompleteOnChange, getOptionLabel: (option) => option["label"], renderOption: (option) => (option.button) ? option.button : _jsx("div", { children: option.label }, void 0), style: { width: "100%" }, label: label, renderInput: (_a) => {
                    var params = __rest(_a, []);
                    return _jsx(TextValidator, Object.assign({}, params, { variant: "outlined", value: value, label: label, style: { width: "100%" }, autoComplete: "nope" }), void 0);
                } }, void 0),
            _jsx(SimpleModal, { open: open, handleClose: handleClose, resourceName: modalResourceName }, void 0)] }, void 0);
}
const useDialogStyle = makeStyles((theme) => ({
    root: {
        minWidth: "40vw"
    }
}));
export default function SimpleModal({ open, handleClose, resourceName }) {
    // getModalStyle is not a pure function, we roll the style only on the first render;
    const body = useMemo(() => {
        if (resourceName) {
            return _jsx(Create, { propResourceName: resourceName }, void 0);
        }
    }, [resourceName]);
    const classes = useDialogStyle();
    return (_jsxs(Dialog, Object.assign({ className: classes.root, onClose: handleClose, "aria-labelledby": "simple-dialog-title", open: open }, { children: [_jsx(DialogTitle, Object.assign({ id: "simple-dialog-title" }, { children: "Create new" }), void 0),
            _jsx(DialogContent, { children: body }, void 0),
            _jsx(DialogActions, {}, void 0)] }), void 0));
}
/**
 * @param {int} value
 * @param {array} options
 * @returns {int}
 */
export function getAutocompleteValuePosition(value, options) {
    return options.indexOf(options.find(option => parseInt(option.id) === value));
}
