import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "@material-ui/core";
export default function ReferenceShow({ model, record }) {
    if (record) {
        // @ts-ignore
        const id = (typeof record === "number") ? record : record["id"];
        // @ts-ignore
        const name = (typeof record === "number") ? record : record[model.optionText];
        return _jsx(Link, Object.assign({ color: "secondary", href: `/${model.resourceName}/${id}/show` }, { children: name }), void 0);
    }
    return _jsx(_Fragment, {}, void 0);
}
