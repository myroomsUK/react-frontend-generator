import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function ({ propertyRecord }) {
    if (propertyRecord) {
        return _jsxs("a", Object.assign({ href: propertyRecord.url, target: "_blank" }, { children: [" ", propertyRecord.filename, " "] }), void 0);
    }
    return _jsx("div", { children: "No file" }, void 0);
}
