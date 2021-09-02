import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));
export default function SimpleAccordion({ title, elevation = 0, children }) {
    const classes = useStyles();
    return (_jsx("div", Object.assign({ className: classes.root }, { children: _jsxs(Accordion, Object.assign({ elevation: elevation }, { children: [_jsx(AccordionSummary, Object.assign({ expandIcon: _jsx(ExpandMoreIcon, {}, void 0), "aria-controls": "panel1a-content", id: "panel1a-header" }, { children: _jsx(Typography, Object.assign({ className: classes.heading }, { children: title }), void 0) }), void 0), _jsx(AccordionDetails, { children: children }, void 0)] }), void 0) }), void 0));
}
