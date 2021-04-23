import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {CardHeader, Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import red from "@material-ui/core/colors/red";


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

export default function SimpleCard({title, subTitle, avatar, children, elevation =0, action, transparent=false}) {
    const classes = useStyles(transparent);
    return (
        <Card className={ (transparent) ? classes.rootTransparent : classes.root} elevation={elevation}>
            <CardHeader avatar={
                avatar && <Avatar aria-label="recipe" className={classes.avatar}>
                    {avatar}
                </Avatar>
            } title={<Typography color="secondary" variant="h5">{title}</Typography>} subheader={subTitle} action={action}>

            </CardHeader>
            {children && <CardContent>
                {children}
            </CardContent>}
        </Card>
    );
}
