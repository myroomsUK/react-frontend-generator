import { jsx as _jsx } from "react/jsx-runtime";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";
const useStyles = (colorMap) => makeStyles(colorMap);
export default function ChipGenerator({ propertyRecord, propertyModel, colorMap }) {
    var _a, _b;
    const { options } = propertyModel;
    const classes = useStyles(colorMap)();
    const label = (_a = options === null || options === void 0 ? void 0 : options.find(option => option.id === propertyRecord)) === null || _a === void 0 ? void 0 : _a.label;
    const id = (_b = options === null || options === void 0 ? void 0 : options.find(option => option.id === propertyRecord)) === null || _b === void 0 ? void 0 : _b.id;
    return _jsx(Chip, { label: label, className: classes[id] }, void 0);
}
