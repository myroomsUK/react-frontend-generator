export default function ShowField({propertyModel,...rest}:any){
    return propertyModel.getOutputField(rest)
}