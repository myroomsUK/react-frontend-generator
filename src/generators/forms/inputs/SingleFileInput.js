import React, {useEffect, useRef, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import {DropzoneArea} from "material-ui-dropzone";
import {useDeleteFile} from "../../../redux/actions/verbs/deleteFile";
import CustomDeleteButton from "../../../rendering/components/buttons/CustomDeleteButton";


export default function SingleFileInput({file, label, onChange, resourceName, resourceId,id}){

    const creationTime = useRef(Date.now());
    const [localFile, setLocalFile] = useState();

    useEffect(()=>{
        setLocalFile(file);
    },[file])

    const {remove} = useDeleteFile(resourceName);

    const deleteForm = (fileId)=>{
        if(fileId < creationTime.current){
            remove(resourceId, id, fileId);
        }
        setLocalFile(undefined);
        onChange(id, null)
    }

    const dropZoneOnChange = (files) => {
        if (!files.length) return;

        const file = files[0]
        const reader = new FileReader();
        reader.onloadend = function() {
            const newFile = {
                base64:reader.result,
                title: file.name,
                filename: file.name,
            }
            onChange(id, newFile)
        }
        reader.readAsDataURL(file);

    }

    return <Grid container>

        <Grid item>
            <Typography>{label}</Typography>
            {
                (localFile) ?
                    <div> <a href={localFile.url} target="_blank"> {localFile.title} </a> <CustomDeleteButton icon onClick={() => deleteForm(file.id)}/></div>
                :
                    <DropzoneArea onChange={dropZoneOnChange} filesLimit={1}/>
            }

        </Grid>
    </Grid>
}