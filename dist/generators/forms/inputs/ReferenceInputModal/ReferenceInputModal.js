import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { Create } from "../../../pages/CreatePageGenerator";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { makeStyles } from "@material-ui/core";
const useDialogStyle = makeStyles((theme) => ({
    root: {
        minWidth: "40vw"
    }
}));
export default function ReferenceInputModal({ open, handleClose, resourceName }) {
    // getModalStyle is not a pure function, we roll the style only on the first render;
    const body = useMemo(() => {
        if (resourceName) {
            return _jsx(Create, { propResourceName: resourceName }, void 0);
        }
    }, [resourceName]);
    const classes = useDialogStyle();
    return (_jsxs(Dialog, Object.assign({ className: classes.root, onClose: handleClose, "aria-labelledby": "simple-dialog-title", open: open }, { children: [_jsx(DialogTitle, Object.assign({ id: "simple-dialog-title" }, { children: "Create new" }), void 0),
            _jsx(DialogContent, { children: body }, void 0),
            _jsx(DialogActions, {}, void 0)] }), void 0));
}
