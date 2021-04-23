import React from "react";

export default function chipGenerator(resourceName, props){
    switch(resourceName){
        default:{
            return <div>{props.propertyModel.options?.find(option => option.id === props.propertyRecord)?.label}</div>
        }
    }
}