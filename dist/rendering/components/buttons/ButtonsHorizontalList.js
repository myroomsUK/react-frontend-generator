import { jsx as _jsx } from "react/jsx-runtime";
import makeStyles from "@material-ui/core/styles/makeStyles";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
export default function ({ children }) {
    const classes = useStyles();
    return _jsx("div", Object.assign({ className: classes.root }, { children: children }), void 0);
}
