import React from "react";
import {useDispatch} from "react-redux";
import {
    BOOLEAN,
    DATE,
    EMBEDDED_MULTIPLE,
    EMBEDDED_SINGLE,
    ENUM_SINGLE,
    FILE_MULTIPLE,
    FILE_SINGLE,
    MONEY,
    REFERENCE
} from "../forms/inputs/InputTypes";
import {push} from "connected-react-router";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import {Link, Typography} from "@material-ui/core";

import Button from "@material-ui/core/Button";

import {PropertyModel} from "../../resource-models/PropertyModel";
import chipGenerator from "./outputs/chips/chipGenerator";
import ShowFileList from "./ShowFileList";
import {ShowContent} from "./ShowContent";
import {useGetResourceModel} from "../../resource-models/modelsRegistry";
import {IterableShowContent} from "./IterableShowContent";
import {showDate} from "../../utils/timeUtils";

export interface GenericField{
    propertyRecord:any;
    propertyModel: PropertyModel,
    resourceName:string;
    originalId?: number;
    table?: boolean;
    showElement?: any;
}

export const GenericField: React.FC<GenericField> = ({propertyRecord, propertyModel, resourceName:originalResourceName, originalId, table = false, showElement}) => {

    const dispatch = useDispatch();

    const {type, optionText, resourceName, label} = propertyModel;
    const embeddedResource = useGetResourceModel(resourceName);
    switch(type){
        case REFERENCE: {
            const embResourceName = resourceName;
            if (!propertyRecord) {
                return <div></div>
            }
            const value = propertyRecord[optionText];
            return <Link color="secondary" href={`/${embResourceName}/${propertyRecord.id}/show`}>{value}</Link>
        }
        /*case BOOLEAN: {
            /!*return (propertyRecord) ? <CheckIcon/> : <CloseIcon/>*!/
        }*/
       /* case DATE: {
            return <Typography>{showDate(propertyRecord)}</Typography>;
        }*/
        case FILE_SINGLE:{
            if(propertyRecord){
                return <a href={propertyRecord.url} target="_blank"> {propertyRecord.filename} </a>
            }
            return <div>No file</div>
        }
        case FILE_MULTIPLE:{
            return <ShowFileList filesList={propertyRecord} />
        }
        case EMBEDDED_SINGLE:{
            /*if(table){
                return <div></div>
            }
            const embeddedModel = propertyModel.getResource().getModel();
            if(propertyRecord){
                return <ShowContent record={propertyRecord} model={embeddedModel} resourceName={propertyModel.resourceName} showElement={showElement} />
            }*/
            return <div></div>
        }
        case EMBEDDED_MULTIPLE:{
           /* if(table){
                const embeddedPropertyModel = embeddedResource.model.getPropertyByResourceName(originalResourceName);
                const name = embeddedPropertyModel.id;
                return <Button variant="contained" color="primary" onClick={()=>dispatch(push(`/${resourceName}?${name}=${originalId}`))}>{`VIEW ${label}`}</Button>
            }
            if(propertyRecord){

                /!*return <IterableShowContent record={propertyRecord} model={propertyModel} resourceName={propertyModel.resourceName} showElement={showElement} />*!/
            }*/
            return <div></div>
        }
        case ENUM_SINGLE:{
            const props = {propertyRecord, propertyModel, resourceName:originalResourceName, originalId, table, showElement};
            return chipGenerator(originalResourceName,props );
        }
        case MONEY:{
            return <div>{propertyRecord}</div>
        }
        default:{
            return <Typography>{propertyRecord}</Typography>;
        }
    }

}
//export function FakeStringGenericField({label, value}){
   // const propModel = new PropertyModel("fake", new PropertyModelCore({type:INTEGER, label:label}))
    //const model = new Model([propModel]);
    //const record = {"fake": value}
    //return <GenericShowField item={"fake"} model={model} record={record} />
//}
