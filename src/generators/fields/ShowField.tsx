export default function ShowField({propertyModel,...rest}:any){
    console.log("rest", rest);
    console.log("property model", propertyModel);
    return propertyModel.getOutputField(rest)
}