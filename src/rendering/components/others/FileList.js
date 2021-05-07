import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import {Button, useMediaQuery} from "@material-ui/core";
import AddImageDialog from "../../../generators/forms/inputs/AddImageDialog";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


export default function FileList({list, onAdd, onDelete, saveImages, onChange, fileObjects}) {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:900px)');
    const [open, setOpen] = useState(false);

    const listItems = list.map(({title, url, actionIcon}) =>  <ListItem>
        <ListItemText
            primary={title}
        />
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
                <FolderIcon />
            </IconButton>
            {actionIcon}
        </ListItemSecondaryAction>
    </ListItem> )

    return (
        <div className={classes.root}>
            <div className={classes.demo}>
                <List dense={false}>
                    {listItems}
                    <ListItem>
                        <Button variant="contained" color="primary" onClick={()=>setOpen(true)}>Add</Button>
                    </ListItem>
                </List>
            </div>
            <AddImageDialog open={open} setOpen={setOpen} onChange={onChange} fileObjects={fileObjects} onAdd={onAdd} onDelete={onDelete} saveImages={saveImages}/>
        </div>
    );
}
