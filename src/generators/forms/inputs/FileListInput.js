import React, {useEffect, useRef, useState} from "react";
import Grid from "@material-ui/core/Grid";
import CustomDeleteButton from "../../../rendering/components/buttons/CustomDeleteButton";
import {createArrayFromMap, createMapFromArray} from "../../../utils/mapUtils";
import {useDeleteFile} from "../../../redux/actions/verbs/deleteFile";
import ImageGrid from "../../../rendering/components/others/ImageGrid";
import FileList from "../../../rendering/components/others/FileList";
import ImageDialog from "../../fields/ImageDialog";

export default function FileListInput({model, files, modelResourceName, resourceId, onChange, partialSubmitHandler, areImages=true, id= model.id, label = model.label, refresh, ...rest}) {
    const {remove} = useDeleteFile(modelResourceName);
    const creationTime = useRef(Date.now());
    const [uploadedLocalFiles, setUploadedLocalFiles] = useState([]);
    const [totalFiles, setTotalFiles] = useState([]);
    const [localFileListMap, setLocalFileListMap] = useState(new Map());
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState();

    const selectElement = (key) => {
        setSelectedImage(key);
        setOpen(true);
    }


    useEffect(() => {
        if (files) {
            const arrayFiles = Array.from(files.values());
            setTotalFiles(arrayFiles);
            setLocalFileListMap(new Map(files));
        }
    }, [files])

    useEffect(() => {
        if(files){
            setTotalFiles([...totalFiles, ...prepareImagesForRequest(uploadedLocalFiles)])
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
        localFileListMap.delete(key);
        if (key < creationTime.current) {
            remove(resourceId, id, key);
            setLocalFileListMap(new Map(localFileListMap));
        }
        onChange(id, createArrayFromMap(localFileListMap));
        refresh();
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
        partialSubmitHandler({[id]: totalFiles}).then(response =>
        {
            onChange(id, response[id]);
            setUploadedLocalFiles([]);
            refresh()
        }).catch(e => console.log(e));
    }

    const list = areImages ?
        <ImageGrid images={filesList} onSelect={(index)=>selectElement(index)} onChange={prepareImagesForRequest} filesLimit={10} fileObjects={uploadedLocalFiles} onAdd={addFile} onDelete={removeFile} saveImages={saveImages}/>
        :
        <FileList list={filesList} onChange={prepareImagesForRequest} filesLimit={10} fileObjects={uploadedLocalFiles} onAdd={addFile} onDelete={removeFile} saveImages={saveImages}/>

    return <Grid container>
        <Grid md={12} xs={12} item>
            {list}
        </Grid>
        <ImageDialog images={filesList} open={open} selectedImage={selectedImage} setOpen={setOpen}/>
    </Grid>
}
