import React from "react";
import Grid from "@material-ui/core/Grid";
import {Divider, List, ListItem} from "@material-ui/core";
import {Model} from "../../resource-models/Model";
import {EmbeddedMultiplePropertyRecord} from "../../resource-models/PropertyRecord";
import {Record} from "../../resource-models/Record";

export interface IterableShowContentProps{
    record: EmbeddedMultiplePropertyRecord;
    model: Model,
    resourceName: string;
    showElement?: any;

}

export const IterableShowContent: React.FC<IterableShowContentProps> = ({model, record, showElement}) => {

    const recordsList = record.value;
    if(record===undefined || recordsList.length===0){
        return <div>No elements found</div>
    }
    if(showElement){
        return  <List style={{width:"100%"}} >
            {
                recordsList.map((singleRecord:Record) => {

                    return <>
                        <ListItem alignItems="center">
                            {React.cloneElement(showElement, {record:singleRecord, model:model})}
                        </ListItem>
                        <Divider component="li" />
                    </>
                })
            }
        </List>

    }else{
        return <Grid container>
            {recordsList.map((singleRecord:Record) =>
                <Grid item xs={12} md={12}>
                    <Grid container spacing={2}>
                        {
                            model.properties.filter(propertyModel=> propertyModel.read ===true).map(propertyModel => {
                                const {xs, md, id} = propertyModel;
                                return <Grid item xs={xs} md={md}>
                                    {propertyModel.getOutputField({record:singleRecord.getPropertyRecord(propertyModel.id), showLabel:true})}
                                </Grid>
                            })
                        }
                    </Grid>
                </Grid>)}
        </Grid>
    };

}