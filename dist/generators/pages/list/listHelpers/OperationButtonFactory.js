import { jsx as _jsx } from "react/jsx-runtime";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
export class OperationButtonFactory {
    static getOperationButton({ icon, text, color, onClick }) {
        if (icon) {
            // @ts-ignore
            return _jsx(IconButton, Object.assign({ variant: "contained", color: color, onClick: onClick }, { children: icon }), void 0);
        }
        // @ts-ignore
        return _jsx(Button, Object.assign({ variant: "contained", color: color, onClick: onClick }, { children: text }), void 0);
    }
}
