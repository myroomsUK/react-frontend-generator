import { jsx as _jsx } from "react/jsx-runtime";
import 'date-fns';
import { CustomTextValidator } from "../formHelpers";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import moment from "moment";
export default function (props) {
    const { model, name = model.id, onClick, value, label = model.label, hasError, errorMessage } = props;
    const date = (value !== undefined) ? moment(value, "YYYY-MM-DD") : null;
    const handleDateChange = (date) => {
        onClick({ target: { value: date === null || date === void 0 ? void 0 : date.format("YYYY-MM-DD"), name: name } }, date);
    };
    return (_jsx(MuiPickersUtilsProvider, Object.assign({ utils: MomentUtils }, { children: _jsx(DatePicker, { style: { "width": "100%" }, name: name, disableToolbar: true, variant: "inline", format: "DD/MM/yyyy", margin: "normal", id: "date-picker-inline", label: label, value: date, onChange: handleDateChange, disablePast: true, error: hasError, helperText: errorMessage, TextFieldComponent: DateValidationInput }, void 0) }), void 0));
}
export const DateValidationInput = (props) => {
    const newProps = Object.assign(Object.assign({}, props), { style: { width: "100%" }, variant: "outlined" });
    // @ts-ignore
    return _jsx(CustomTextValidator, Object.assign({ errorMessage: props.helperText }, newProps), void 0);
};
