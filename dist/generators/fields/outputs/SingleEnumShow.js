import { jsx as _jsx } from "react/jsx-runtime";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core";
export default function SingleEnumShow({ propertyModel, propertyRecord, colorMap }) {
    var _a, _b, _c;
    const trueColorMap = (_a = (colorMap)) !== null && _a !== void 0 ? _a : {};
    const classes = makeStyles(trueColorMap)();
    const { options } = propertyModel;
    const label = (_b = options === null || options === void 0 ? void 0 : options.find((option) => option.id === propertyRecord)) === null || _b === void 0 ? void 0 : _b.label;
    const id = (_c = options === null || options === void 0 ? void 0 : options.find((option) => option.id === propertyRecord)) === null || _c === void 0 ? void 0 : _c.id;
    // @ts-ignore
    return _jsx(Chip, { className: classes[id], label: label }, void 0);
}
