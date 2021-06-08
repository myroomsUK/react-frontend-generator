import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function ({ record }) {
    if (record) {
        return _jsxs("a", Object.assign({ href: record.url, target: "_blank" }, { children: [" ", record.filename, " "] }), void 0);
    }
    return _jsx("div", { children: "No file" }, void 0);
}
