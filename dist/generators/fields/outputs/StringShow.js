import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
export default function StringShow({ propertyRecord }) {
    const [local, setLocal] = useState(true);
    return _jsx("div", { children: propertyRecord }, void 0);
}
