import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "@material-ui/core";
export default function ReferenceShow({ model, propertyRecord }) {
    return _jsx(Link, Object.assign({ color: "secondary", href: `/${model.resourceName}/${propertyRecord.id}/show` }, { children: propertyRecord[model.optionText] }), void 0);
}
