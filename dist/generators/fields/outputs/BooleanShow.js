import { jsx as _jsx } from "react/jsx-runtime";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
export default function Booleanshow({ record }) {
    return (record) ? _jsx(CheckIcon, {}, void 0) : _jsx(CloseIcon, {}, void 0);
}
