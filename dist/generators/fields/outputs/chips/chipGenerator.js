import { jsx as _jsx } from "react/jsx-runtime";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Chip from "@material-ui/core/Chip";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import yellow from "@material-ui/core/colors/yellow";
const useStyles = makeStyles({
    not_managed: {
        backgroundColor: red.A700,
        color: "white"
    },
    managed: {
        backgroundColor: green.A700,
    },
    discarded: {
        backgroundColor: yellow.A700,
    },
    enquired: {
        backgroundColor: yellow.A100,
    },
});
export default function ChipGenerator({ propertyRecord, propertyModel, colorMap }) {
    var _a, _b;
    const { options } = propertyModel;
    const label = (_a = options === null || options === void 0 ? void 0 : options.find(option => option.id === propertyRecord)) === null || _a === void 0 ? void 0 : _a.label;
    const id = (_b = options === null || options === void 0 ? void 0 : options.find(option => option.id === propertyRecord)) === null || _b === void 0 ? void 0 : _b.id;
    return _jsx(Chip, { label: label }, void 0);
}
