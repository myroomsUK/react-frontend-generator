import { jsx as _jsx } from "react/jsx-runtime";
export default function chipGenerator(resourceName, props) {
    var _a, _b;
    switch (resourceName) {
        default: {
            return _jsx("div", { children: (_b = (_a = props.propertyModel.options) === null || _a === void 0 ? void 0 : _a.find(option => option.id === props.propertyRecord)) === null || _b === void 0 ? void 0 : _b.label }, void 0);
        }
    }
}
