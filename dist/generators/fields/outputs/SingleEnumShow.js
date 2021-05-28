import { jsx as _jsx } from "react/jsx-runtime";
import Chip from "@material-ui/core/Chip";
export default function SingleEnumShow({ propertyModel, propertyRecord, colorMap }) {
    const { options } = propertyModel;
    const optionFound = options === null || options === void 0 ? void 0 : options.find((option) => option.id === propertyRecord);
    const label = optionFound === null || optionFound === void 0 ? void 0 : optionFound.label;
    const id = optionFound === null || optionFound === void 0 ? void 0 : optionFound.id;
    /*const classes = makeStyles({
        not_managed: {
            backgroundColor: red.A700,
            color:"white"
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
    })();

    // @ts-ignore
    const correct = classes[id];*/
    return (optionFound) ? _jsx(Chip, { label: label }, void 0) : _jsx("div", { children: "Not defined" }, void 0);
}
