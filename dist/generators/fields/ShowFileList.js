import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { makeStyles } from "@material-ui/core/styles";
import ImageDialog from "./ImageDialog";
export default function ({ filesList }) {
    return _jsx(ShowImageGrid, { images: filesList }, void 0);
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "100%",
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        margin: "10px 0"
    },
    gridList: {
        width: "100%",
        margin: 10
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));
function ShowImageGrid({ images }) {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:900px)');
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const selectElement = (key) => {
        setSelectedImage(key);
        setOpen(true);
    };
    const cols = matches ? 6 : 3;
    return (_jsxs(_Fragment, { children: [_jsx("div", Object.assign({ className: classes.root }, { children: _jsx(GridList, Object.assign({ cellHeight: 180, cols: cols, className: classes.gridList }, { children: images.map(({ title, url, actionIcon }, index) => (_jsxs(GridListTile, Object.assign({ onClick: () => selectElement(index) }, { children: [_jsx("img", { src: url, alt: title }, void 0),
                            _jsx(GridListTileBar, { title: title, actionIcon: actionIcon }, void 0)] }), index))) }), void 0) }), void 0),
            _jsx(ImageDialog, { images: images, open: open, selectedImage: selectedImage, setOpen: setOpen }, void 0)] }, void 0));
}
