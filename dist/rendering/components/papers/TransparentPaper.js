import { jsx as _jsx } from "react/jsx-runtime";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "transparent",
        elevation: 0,
    }
}));
export default function TransparentPaper(props) {
    const classes = useStyles();
    return _jsx(Paper, Object.assign({ square: true }, props, { className: classes.root }, { children: props.children }), void 0);
}
