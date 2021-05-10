import React, {useEffect, useRef, useState} from "react";
import Grid from "@material-ui/core/Grid";
import CustomDeleteButton from "../../../rendering/components/buttons/CustomDeleteButton";
import {createArrayFromMap, createMapFromArray} from "../../../utils/mapUtils";
import {useDeleteFile} from "../../../redux/actions/verbs/deleteFile";
import ImageGrid from "../../../rendering/components/others/ImageGrid";
import FileList from "../../../rendering/components/others/FileList";

export default function FileListInput({model, files, resourceName, resourceId, onChange, partialSubmitHandler, areImages=true, id= model.id, label = model.label, ...rest}) {

    const {remove} = useDeleteFile(resourceName);
    const creationTime = useRef(Date.now());
    const [uploadedLocalFiles, setUploadedLocalFiles] = useState([]);
    const [totalFiles, setTotalFiles] = useState([]);
    const [localFileListMap, setLocalFileListMap] = useState(new Map());

    useEffect(() => {
        if (files) {
            setTotalFiles(files);
            const formValueMap = createMapFromArray(files);
            setLocalFileListMap(new Map(formValueMap));
        }
    }, [files])

    useEffect(() => {
        if(files){
            setTotalFiles([...files, ...prepareImagesForRequest(uploadedLocalFiles)])
        }
    }, [uploadedLocalFiles])
    const prepareImagesForRequest = (uploadedFiles) => {
        if (!uploadedFiles.length) return [];

        const newDataFiles = [];

        uploadedFiles.forEach((file) => {
            const newFile = {
                base64: file.data,
                title: file.file.name,
                filename: file.file.name,
            }
            newDataFiles.push(newFile);
        })

        return newDataFiles
    }
    const deleteForm = (key) => {
        const deleted = localFileListMap.delete(key);

        if (key < creationTime.current) {
            remove(resourceId, id, key);
            setLocalFileListMap(new Map(localFileListMap));
        }
        onChange(id, createArrayFromMap(localFileListMap));
    }
    const filesList = createArrayFromMap(localFileListMap).map((file, index) => {
        file.actionIcon = <CustomDeleteButton icon onClick={() => deleteForm(file.id)}/>
        return file;
    })
    const addFile = (files) => {
        setUploadedLocalFiles([...uploadedLocalFiles, ...files])
    }
    const removeFile = (file, index) => {
        let files = [...uploadedLocalFiles];
        files.splice(index, 1);
        setUploadedLocalFiles(files);
    }
    const saveImages = () => {
        partialSubmitHandler({[id]: totalFiles}).then(response => {
            onChange(id, response[id]);
            setUploadedLocalFiles([]);
        }).catch(e => console.log(e));
    }

    const list = areImages ?
        <ImageGrid images={filesList} onChange={prepareImagesForRequest} filesLimit={10} fileObjects={uploadedLocalFiles} onAdd={addFile} onDelete={removeFile} saveImages={saveImages}/>
        :
        <FileList list={filesList} onChange={prepareImagesForRequest} filesLimit={10} fileObjects={uploadedLocalFiles} onAdd={addFile} onDelete={removeFile} saveImages={saveImages}/>

    return <Grid container>
        <Grid md={12} xs={12} item>
            {list}
        </Grid>
    </Grid>
}
