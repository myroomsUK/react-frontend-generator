import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
function RecapHeader({ primary, secondary, actions }) {
    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: "rgb(245,247,250)",
            padding: 10,
            minHeight: 150
        },
        title: {}
    }));
    const classes = useStyles();
    let mda = 4;
    let mdp = 4;
    let mds = 4;
    return _jsx(Paper, Object.assign({ className: classes.root, square: true, color: "red" }, { children: _jsxs(Grid, Object.assign({ container: true }, { children: [_jsx(Grid, Object.assign({ item: true, md: mdp }, { children: primary }), void 0),
                _jsx(Grid, Object.assign({ item: true, md: mds }, { children: secondary }), void 0),
                _jsx(Grid, Object.assign({ item: true, md: mda }, { children: actions }), void 0)] }), void 0) }), void 0);
}
RecapHeader.propTypes = {
    primary: PropTypes.any.isRequired
};
export default RecapHeader;
