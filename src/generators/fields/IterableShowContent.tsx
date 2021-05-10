import React from "react";
import Grid from "@material-ui/core/Grid";
import {Divider, List, ListItem} from "@material-ui/core";
import {EmbeddedMultipleModel} from "../../resource-models/propertyModels/EmbeddedMultipleModel";

interface Props{
    record: any[];
    model: EmbeddedMultipleModel,
    resourceName: string;
    showElement?: any;

}

export const IterableShowContent: React.FC<Props> = ({model, record, resourceName, showElement}) => {

    const embeddedModel = model.getResource().getModel();

    if(record.length===0){
        return <div>No elements found</div>
    }
    if(showElement){
        return  <List style={{width:"100%"}} >
            {
                record.map((singleRecord) => {

                    return <>
                        <ListItem alignItems="center">
                            {React.cloneElement(showElement, {record:singleRecord, model:embeddedModel})}
                        </ListItem>
                        <Divider component="li" />
                    </>
                })
            }
        </List>

    }else{
        return <Grid container>
            {record.map(singleRecord =>
                <Grid item xs={12} md={12}>
                    <Grid container spacing={2}>
                        {
                            embeddedModel.properties.filter(propertyModel=> propertyModel.read ===true).map(propertyModel => {
                                const {xs, md, id} = propertyModel;
                                return <Grid item xs={xs} md={md}>
                                    {propertyModel.getOutputField(undefined)}
                                </Grid>
                            })
                        }
                    </Grid>
                </Grid>)}
        </Grid>
    };

}