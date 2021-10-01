var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import Grid from "@material-ui/core/Grid";
import CustomDeleteButton from "../../../rendering/components/buttons/CustomDeleteButton";
import { createArrayFromMap } from "../../../utils/mapUtils";
import { useDeleteFile } from "../../../redux/actions/verbs/deleteFile";
import ImageGrid from "../../../rendering/components/others/ImageGrid";
import FileList from "../../../rendering/components/others/FileList";
import ImageDialog from "../../fields/ImageDialog";
export default function FileListInput(_a) {
    var { model, files, modelResourceName, resourceId, onChange, partialSubmitHandler, areImages = true, id = model.id, label = model.label, refresh, submitHandler } = _a, rest = __rest(_a, ["model", "files", "modelResourceName", "resourceId", "onChange", "partialSubmitHandler", "areImages", "id", "label", "refresh", "submitHandler"]);
    const { remove } = useDeleteFile(modelResourceName);
    const creationTime = useRef(Date.now());
    const [uploadedLocalFiles, setUploadedLocalFiles] = useState([]);
    const [totalFiles, setTotalFiles] = useState([]);
    const [localFileListMap, setLocalFileListMap] = useState(new Map());
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const selectElement = (key) => {
        setSelectedImage(key);
        setOpen(true);
    };
    useEffect(() => {
        if (files) {
            const arrayFiles = Array.from(files.values());
            setLocalFileListMap(new Map(files)); // maybe useless
            setTotalFiles(arrayFiles);
        }
    }, [files]);
    const prepareImagesForRequest = (uploadedFiles) => {
        if (!uploadedFiles.length)
            return [];
        const newDataFiles = [];
        uploadedFiles.forEach((file, index) => {
            const newFile = {
                fid: `${Date.now()}${index}`,
                base64: file.data,
                title: file.file.name,
                filename: file.file.name,
            };
            newDataFiles.push(newFile);
        });
        return newDataFiles;
    };
    const deleteForm = (key) => {
        localFileListMap.delete(key);
        if (key < creationTime.current) {
            remove(resourceId, id, key);
            setLocalFileListMap(new Map(localFileListMap));
        }
        onChange([id, createArrayFromMap(localFileListMap)]);
        refresh();
    };
    const filesList = createArrayFromMap(localFileListMap).map((file, index) => {
        file.actionIcon = _jsx(CustomDeleteButton, { icon: true, onClick: () => deleteForm(file.id) }, void 0);
        return file;
    });
    const addFile = (files) => {
        setUploadedLocalFiles([...uploadedLocalFiles, ...files]);
        const newTotalFiles = [...totalFiles, ...prepareImagesForRequest([...uploadedLocalFiles, ...files])];
        setTotalFiles(newTotalFiles);
        onChange([id, newTotalFiles]);
    };
    const removeFile = (file, index) => {
        let files = [...uploadedLocalFiles];
        files.splice(index, 1);
        setUploadedLocalFiles(files);
    };
    const saveImages = () => {
        submitHandler().then(response => {
            setUploadedLocalFiles([]);
            refresh();
        }).catch(e => console.log(e));
    };
    const list = areImages ?
        _jsx(ImageGrid, { images: filesList, onSelect: (index) => selectElement(index), onChange: prepareImagesForRequest, filesLimit: 10, fileObjects: uploadedLocalFiles, onAdd: addFile, onDelete: removeFile, saveImages: saveImages }, void 0)
        :
            _jsx(FileList, { list: filesList, onChange: prepareImagesForRequest, filesLimit: 10, fileObjects: uploadedLocalFiles, onAdd: addFile, onDelete: removeFile, saveImages: saveImages }, void 0);
    return _jsxs(Grid, Object.assign({ container: true }, { children: [_jsx(Grid, Object.assign({ md: 12, xs: 12, item: true }, { children: list }), void 0), _jsx(ImageDialog, { images: filesList, open: open, selectedImage: selectedImage, setOpen: setOpen }, void 0)] }), void 0);
}
