import { jsx as _jsx } from "react/jsx-runtime";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
const useDynamicPageHeaderStyles = ({ colsNumber }) => {
    return makeStyles({
        root: {
            backgroundColor: "#f5f5f5"
        },
        column: {
            flexBasis: (colsNumber > 0) ? `${100 / colsNumber}%` : "100%",
            padding: 10
        },
        paper: { display: "flex" }
    });
};
export default function DynamicPageHeader({ cols = [] }) {
    const colsNumber = cols.length;
    const classes = useDynamicPageHeaderStyles({ colsNumber: colsNumber })();
    return _jsx(Paper, Object.assign({ className: classes.paper }, { children: cols.map((component) => _jsx("div", Object.assign({ className: classes.column }, { children: component }), void 0)) }), void 0);
}
