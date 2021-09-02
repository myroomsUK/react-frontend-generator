import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SimpleCard from "./Card";
import Divider from "@material-ui/core/Divider";
export default function Section({ title, children, elevation = 0, avatar }) {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: "100%",
            padding: 10,
        },
        title: {
            fontWeight: "bold"
        },
        titleWrapper: {
            marginTop: 10,
            marginBottom: 30
        }
    }));
    const classes = useStyles();
    return _jsxs(SimpleCard, Object.assign({ title: title, avatar: avatar, elevation: elevation, square: true, className: classes.root }, { children: [children && _jsx(Grid, Object.assign({ container: true }, { children: children }), void 0), _jsx(Divider, {}, void 0)] }), void 0);
}
