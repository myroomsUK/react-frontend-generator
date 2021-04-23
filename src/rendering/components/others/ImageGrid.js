import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {useMediaQuery} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {PhotoCamera} from "@material-ui/icons";
import AddImageDialog from "../../../generators/forms/inputs/AddImageDialog";

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
    button:{
        height:"100%",
        width:"100%"
    }
}));

export default function ImageGrid({images, onChange, fileObjects, onAdd, onDelete, saveImages}) {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:900px)');
    const [open, setOpen] = useState(false);

    const cols = matches ? 6 : 3;
    return (
        <div className={classes.root}>
            <GridList cellHeight={180} cols={cols} className={classes.gridList}>
                {images.map(({title, url, actionIcon},index) => (
                    <GridListTile key={index}>
                        <img src={url} alt={title} />
                        <GridListTileBar
                            title={title}
                            actionIcon={
                                actionIcon
                            }
                        />
                    </GridListTile>
                ))}
                <GridListTile>
                    <Button className={classes.button} variant={"outlined"} color="primary" aria-label="upload picture" component="span" onClick={()=>setOpen(true)}>
                        <PhotoCamera fontSize={"large"} />
                    </Button>
                    <AddImageDialog open={open} setOpen={setOpen} onChange={onChange} fileObjects={fileObjects} onAdd={onAdd} onDelete={onDelete} saveImages={saveImages}/>
                </GridListTile>
            </GridList>
        </div>
    );
}

