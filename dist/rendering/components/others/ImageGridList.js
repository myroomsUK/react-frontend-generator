import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    tile: {
        height: 180
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList({ images }) {
    const classes = useStyles();
    //const tileData = [{title:"text", url:"https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg"}]
    return (_jsx("div", Object.assign({ className: classes.root }, { children: _jsx(GridList, Object.assign({ className: classes.gridList, cols: 4 }, { children: images.map(({ title, url, actionIcon }) => (_jsxs(GridListTile, { children: [_jsx("img", { src: url, alt: title }, void 0),
                    _jsx(GridListTileBar, { title: title, classes: {
                            root: classes.titleBar,
                            title: classes.title,
                        }, actionIcon: actionIcon }, void 0)] }, url))) }), void 0) }), void 0));
}
