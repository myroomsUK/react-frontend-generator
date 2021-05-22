import React, {useState} from "react";
import {useMediaQuery} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import {makeStyles} from "@material-ui/core/styles";
import ImageDialog from "./ImageDialog";

export default function ({filesList=[]}){
    return <ShowImageGrid images={filesList}/>
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width:"100%",
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        margin:"10px 0"
    },
    gridList: {
        width:"100%",
        margin:10
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


function ShowImageGrid({images}){
    console.log("images", images)
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:900px)');
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState();

    const selectElement = (key) => {
        setSelectedImage(key);
        setOpen(true);
    }

    const cols = matches ? 6 : 3;
    return (
        <>
            <div className={classes.root}>
                <GridList cellHeight={180} cols={cols} className={classes.gridList}>
                    {images.map((elements,index) => {
                        const actionIcon = elements.get("actionIcon")
                        const url = elements.get("url")
                        const title = elements.get("title")
                        return <GridListTile key={index} onClick={()=>selectElement(index)}>
                                <img src={url} alt={title} />
                                <GridListTileBar
                                    title={title}
                                    actionIcon={
                                        actionIcon
                                    }
                                />
                            </GridListTile>

                    })
                    }
                </GridList>
            </div>
            <ImageDialog images={images} open={open} selectedImage={selectedImage} setOpen={setOpen}/>
        </>


    );

}