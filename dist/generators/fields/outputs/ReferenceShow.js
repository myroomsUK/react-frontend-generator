import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "@material-ui/core";
export default function ReferenceShow({ model, value }) {
    console.log("propertyRecord", value);
    if (value) {
        // @ts-ignore
        const id = (typeof value === "number") ? value : value["id"];
        // @ts-ignore
        const name = (typeof value === "number") ? value : value[model.optionText];
        return _jsx(Link, Object.assign({ color: "secondary", href: `/${model.resourceName}/${id}/show` }, { children: name }), void 0);
    }
    return _jsx(_Fragment, {}, void 0);
}
