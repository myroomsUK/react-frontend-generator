import React from "react";
import Grid from "@material-ui/core/Grid";
import {Model} from "../../resource-models/Model";


export interface ShowContent{
    record: any,
    model: Model|undefined,
    showElement?:any,
}

export const ShowContent: React.FC<ShowContent> = ({record, model,showElement}) => {
    if(showElement){
        const props = {model:model, record}
        return React.cloneElement(showElement, props);
    }

    return <Grid container spacing={2}>
        {model?.properties.filter(propertyModel => propertyModel.read === true).map((propertyModel, index) => {
            const {xs, md, id} = propertyModel;
            return <Grid key={index} item xs={xs} md={md}>
                {propertyModel.getOutputField({model:propertyModel,record:record, showLabel:true})}
            </Grid>
        })
        }
    </Grid>

}