import React, {useEffect, useMemo, useState} from "react";
import {useGetResourceModel} from "../../../resource-models/modelsRegistry";
import Grid from "@material-ui/core/Grid";
import {ShowContent} from "../../fields/ShowContent";


interface ShowProps {
    propResourceName: string,
    propId: number,
    record: any,
    propShowPage?: any
}

export const Show: ({propResourceName, propId: id, record, propShowPage}: ShowProps) => JSX.Element = ({propResourceName, propId:id, record, propShowPage}:ShowProps) =>{

    const resourceModel = useGetResourceModel(propResourceName);
    const {model, showPage} = resourceModel;
    const [genericShowRender, setGenericShowRender] = useState(<div/>);


    const showFormProps = useMemo(()=>{
        return {
            model: model,
            resourceName: propResourceName,
            record: record
        }
    },[model, record, propResourceName])



    useEffect(()=>{
        console.log("record", record)
        if(propShowPage){
            // @ts-ignore
            setGenericShowRender(React.cloneElement(propShowPage, showFormProps ));
        }else{
            setGenericShowRender(<Grid container spacing={2}>
            <ShowContent record={record} resourceName={propResourceName} model={model} />
            </Grid>)
        }
    },[record])

    return genericShowRender;




}