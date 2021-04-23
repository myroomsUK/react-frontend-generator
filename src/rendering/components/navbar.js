import {useDispatch, useSelector} from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React, {useEffect, useState} from "react";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/styles";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import _ from 'lodash';


export function Navbar() {

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const [navbarObjects, setNavbarObjects] = useState([
    ])

    useEffect(() => {
        const link = state.router.location.pathname;

        const checkItem = (item, link) => {
            return item.getLink() !== "/" && _.startsWith( link, item.getLink())
        }

        const findActive = function (navbarItems, link) {
            navbarItems.forEach(item => {
                item.setActive(checkItem(item, link))
                const childList = item.getChildList();
                if (childList){
                    findActive(childList, link);
                    item.expanded = childList.some(item => item.active ===true || item.expanded===true);
                }
            });
        };

        const newNavbarObjects = _.cloneDeep(navbarObjects);
        findActive(newNavbarObjects, link);

        setNavbarObjects(newNavbarObjects);
    }, [state.router.location.pathname])


    return ListGenerator(navbarObjects, "");

};


function ListGenerator(list, className){

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }));
    const classes = useStyles();
    return list.map(({text,onClick, childList, icon, active, expanded}, index) => {
        if(childList){
            return <ListElementWithChildList  expanded={expanded} text={text} index={index} className={className} icon={icon} childList={childList} classes={classes} selected={active} key={index}/>
        }else{
            return (
                <ListItem className={(className ? className : "")} button key={text} onClick={onClick} selected={active}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            )
        }

    })
}



function ListElementWithChildList({index, className, text, icon,childList, classes, selected, expanded}){
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if(expanded) setOpen(true);
    },[expanded])

    return <React.Fragment key={index}>
        <ListItem className={(className ? className : "")} button key={text} onClick={()=>setOpen(!open)} selected={selected}>
            <ListItemIcon> {open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
        <CollapsedListElement open={open} childList={childList} classes={classes}/>

    </React.Fragment>

}

function CollapsedListElement({childList, open, classes}){

    return <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {ListGenerator(childList, classes.nested)}
        </List>
    </Collapse>
}

class NavbarItem {
    constructor(icon, text, link, onClick, childList = undefined) {
        this.icon = icon;
        this.text = text;
        this.link = link;
        this.onClick = () => onClick(link);
        this.childList = childList;
        this.active = false;
        this.expanded = false;
    }

    getLink = function() {
        return this.link;
    }

    setActive = function(active) {
        this.active = active;
    }

    getChildList = function() {
        return this.childList;
    }

    toJson() {
        const childListToSend = (this.childList) ? this.childList.map(child => child.toJson()) : (this.childList);
        return {icon: this.icon, text: this.text, link: this.link, onClick: this.onClick, childList: childListToSend, active:this.active };
    }

}