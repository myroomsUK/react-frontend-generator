import React from "react";
import _ from "lodash";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import {GenericField} from "./genericField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {PropertyModel} from "../../resource-models/PropertyModel";
import {Model} from "../../resource-models/Model";
import {EMBEDDED_MULTIPLE, EMBEDDED_SINGLE, ENUM_SINGLE} from "../forms/inputs/InputTypes";
import TransparentPaper from "../../rendering/components/papers/TransparentPaper";

interface Props{
    requestedName: string;
    record: any;
    model: PropertyModel | Model;
    resourceName:string;
    showElement?: any;
    noLabel?: boolean;
}


const paperStyles = makeStyles((theme)=>({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[0],
        padding: theme.spacing(1, 1, 1),
    },
    smallPaper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[0],
        padding: theme.spacing(1, 1, 1),
    },
    form: {
        width:"100%"
    },
    label:{
        fontSize: "16px",
        fontWeight: "bold"
    }
}))


export const GenericShowField: React.FC<Props> = ({requestedName, noLabel=false, record:firstRecord, model:firstModel, resourceName,showElement}) => {
    const {record, propertyModel} = splitRequestedName(requestedName, firstRecord, firstModel)
    const classes = paperStyles();
    console.log("resourceName", resourceName);

    const genericFieldProps: GenericField = {
        propertyRecord: record,
        propertyModel: propertyModel,
        resourceName: resourceName,
        showElement: showElement
    }

    switch(propertyModel.type){
        case EMBEDDED_SINGLE:{

            return <Paper elevation={0}>
                {propertyModel.getOutputField(genericFieldProps)}
                {/*<GenericField {...genericFieldProps} originalId={record?.id}  />*/}
            </Paper>
        }
        case EMBEDDED_MULTIPLE:{
            return <Paper style={{width:"100%"}} elevation={0}>
                {/*<GenericField {...genericFieldProps} />*/}
                {propertyModel.getOutputField(genericFieldProps)}
            </Paper>
        }
        case ENUM_SINGLE:{
            return <TransparentPaper className={classes.smallPaper} elevation={0}>
                {propertyModel.getOutputField(genericFieldProps)}
                {/*<GenericField {...genericFieldProps} />*/}
            </TransparentPaper>
        }
        default:{
            return (noLabel) ?
                <TransparentPaper className={classes.smallPaper} elevation={0}><GenericField {...genericFieldProps} /></TransparentPaper> :
            <TransparentPaper className={classes.paper} elevation={0}>
                <Typography className={classes.label}>{_.startCase(propertyModel.label)}</Typography>
                {propertyModel.getOutputField(genericFieldProps)}
               {/* <GenericField {...genericFieldProps} />*/}
            </TransparentPaper>
        }
    }
}

type SplitResponse = {
    record: any;
    propertyModel: PropertyModel;
}

function splitRequestedName(requestedName:string, record: any, model:PropertyModel|Model): SplitResponse{
    const split: string[] = _.split(requestedName, ".");
    const reducerRecord = (start:any, value:string) =>start[value];
    const reducerModel = (accumulator:PropertyModel|Model, value:string) => {
        if(accumulator instanceof Model){
            return accumulator.getProperty(value);
        }else{
            if(accumulator.resource){
                const model = accumulator.resource.model.getProperty(value);
                if(model) return model;
                throw new Error(`Undefined model for ${value}`);
            }else{
                throw new Error(`Undefined resource in ${accumulator}`);
            }
        }
    }

    const reducedRecord = split.reduce(reducerRecord, record)
    // @ts-ignore
    const reducedModel: PropertyModel = split.reduce(reducerModel, model);

    return {record:reducedRecord, propertyModel:reducedModel};
}
