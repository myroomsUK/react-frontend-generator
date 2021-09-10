import { jsx as _jsx } from "react/jsx-runtime";
import TextField from "@material-ui/core/TextField";
import { MenuItem } from "@material-ui/core";
export const AutoCompleteFilter = ({ name, options, inputFieldOnChange, value }) => {
    return _jsx(TextField, Object.assign({ style: { width: 100 }, select: true, name: name, id: name, value: (value) ? value : "", onChange: inputFieldOnChange("text") }, { children: options.map(({ id, label }, index) => _jsx(MenuItem, Object.assign({ value: id }, { children: label }), index)) }), void 0);
};
