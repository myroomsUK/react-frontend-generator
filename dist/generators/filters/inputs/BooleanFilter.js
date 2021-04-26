import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
export default function BooleanFilter({ name, type, inputFieldOnChange, value }) {
    //const inputFieldOnChange(type);
    useEffect(() => {
        if (value === undefined) {
            setCheckedTrue(false);
            setCheckedFalse(false);
        }
    }, [value]);
    const [checkedTrue, setCheckedTrue] = useState(false);
    const [checkedFalse, setCheckedFalse] = useState(false);
    const onClickTrue = () => {
        setCheckedTrue(!checkedTrue);
        if (checkedFalse) {
            setCheckedFalse(!checkedFalse);
        }
        if (!checkedTrue) {
            inputFieldOnChange(type)(name, true);
        }
        else {
            inputFieldOnChange(type)(name, "");
        }
    };
    const onClickFalse = () => {
        if (checkedTrue) {
            setCheckedTrue(!checkedTrue);
        }
        setCheckedFalse(!checkedFalse);
        if (!checkedFalse) {
            inputFieldOnChange(type)(name, false);
        }
        else {
            inputFieldOnChange(type)(name, "");
        }
    };
    return _jsx(React.Fragment, { children: _jsxs(ListItem, { children: [_jsx(FormControlLabel, { control: _jsx(Checkbox, { checked: checkedTrue, id: name, name: name, onClick: onClickTrue }, void 0), label: "T" }, void 0),
                _jsx(FormControlLabel, { control: _jsx(Checkbox, { checked: checkedFalse, id: name, name: name, onClick: onClickFalse }, void 0), label: "F" }, void 0)] }, void 0) }, name);
}
