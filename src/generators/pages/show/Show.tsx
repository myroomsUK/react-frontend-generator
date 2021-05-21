import React, {useEffect, useMemo, useState} from "react";
import {useGetResourceModel} from "../../../resource-models/modelsRegistry";
import Grid from "@material-ui/core/Grid";
import {ShowContent} from "../../fields/ShowContent";
import {Record} from "../../../resource-models/Record";


interface ShowProps {
    propResourceName: string,
    propId: number,
    record: Record,
    propShowPage?: any
}

export const Show: ({propResourceName, propId: id, record, propShowPage}: ShowProps) => JSX.Element = ({propResourceName, propId:id, record, propShowPage}:ShowProps) =>{

    const resourceModel = useGetResourceModel(propResourceName);
    const {model, showPage} = resourceModel;
    const showPageToUse:any = useMemo(()=> propShowPage ? propShowPage: showPage,[propShowPage, showPage])
    const [genericShowRender, setGenericShowRender] = useState(<div/>);


    const showFormProps = useMemo(()=>{
        return {
            model: model,
            resourceName: propResourceName,
            record: record
        }
    },[model, record, propResourceName])



    useEffect(()=>{
        if(showPageToUse){
            // @ts-ignore
            setGenericShowRender(React.cloneElement(showPageToUse, showFormProps ));
        }else{
            setGenericShowRender(
                <Grid container spacing={2}>
                    <ShowContent record={record} model={model} />
                </Grid>)
        }
    },[record])

    return genericShowRender;




}