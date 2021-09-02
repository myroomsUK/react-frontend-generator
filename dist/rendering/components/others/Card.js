import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    rootTransparent: {
        minWidth: 275,
        backgroundColor: "transparent"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    avatar: {
        backgroundColor: "secondary",
    },
});
export default function SimpleCard({ title, subTitle, avatar, children, elevation = 0, action, transparent = false }) {
    const classes = useStyles(transparent);
    return (_jsxs(Card, Object.assign({ className: (transparent) ? classes.rootTransparent : classes.root, elevation: elevation }, { children: [_jsx(CardHeader, { avatar: avatar && _jsx(Avatar, Object.assign({ "aria-label": "recipe", className: classes.avatar }, { children: avatar }), void 0), title: _jsx(Typography, Object.assign({ color: "secondary", variant: "h5" }, { children: title }), void 0), subheader: subTitle, action: action }, void 0), children && _jsx(CardContent, { children: children }, void 0)] }), void 0));
}
