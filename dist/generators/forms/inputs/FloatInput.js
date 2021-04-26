import { jsx as _jsx } from "react/jsx-runtime";
import { CustomTextValidator } from "../formHelpers";
export const FloatInput = ({ hasError, errorMessage, label, onClick, value }) => {
    return _jsx(CustomTextValidator, { error: hasError, errorMessage: errorMessage, label: label, onChange: onClick, value: (value !== null && value !== void 0 ? value : "").toString(), style: { width: "100%" }, type: "number" }, void 0);
};
