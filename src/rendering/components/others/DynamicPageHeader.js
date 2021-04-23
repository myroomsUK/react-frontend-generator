import {makeStyles} from "@material-ui/core";
import React from "react";
import Paper from "@material-ui/core/Paper";
import SimpleCard from "./Card";

const useDynamicPageHeaderStyles = ({colsNumber}) =>  {
    return makeStyles({
        root: {
            backgroundColor: "#f5f5f5"
        },
        column:{
            flexBasis: (colsNumber>0) ? `${100/colsNumber}%`: "100%",
            padding:10
        },
        paper: {display:"flex"}
    });
}

export default function DynamicPageHeader({cols = []}) {
    const colsNumber = cols.length;

    const classes = useDynamicPageHeaderStyles({colsNumber:colsNumber})();
    return <Paper className={classes.paper}>

        {cols.map((component) =>
            <div className={classes.column}>
                    {component}
            </div>)}
    </Paper>;
}




/*
export default function DynamicPageHeader({cols}){
    return <Paper className={classes.paper} elevation={20}>
        <div className={classes.column}>
            <SimpleCard transparent title={"PROPERTY"} elevation={0}>
                <GenericShowField  {...props} requestedName="propertyName"/>
                <GenericShowField {...props} noLabel requestedName="address"/>
            </SimpleCard>
        </div>
        <Divider orientation="vertical"/>
        <div className={classes.column}>
            <SimpleCard transparent title={"MARKETING REPORT"} elevation={0}>
            </SimpleCard>
        </div>
        <Divider orientation="vertical"/>
        <div className={classes.lastColumn}>
            <SimpleCard transparent title={""} elevation={0}>
                <Button variant={"contained"} color={"primary"} onClick={goToEdit}>Edit Property</Button>
                <Button color="primary" variant="contained" onClick={()=> dispatch(push("/units/new", {property:props.record.id}))}>
                    Add Unit
                </Button>
            </SimpleCard>
        </div>
    </Paper>

}*/
