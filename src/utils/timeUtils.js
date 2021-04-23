import moment from "moment";

const inputFormat = "YYYY-MM-DD";
const readableFormat = "DD/MM/YYYY";

export function getFormTimeFormat(timeString){
    return moment(timeString).format("YYYY-MM-DDThh:mm");
}
export function getTime(timeString){
    return moment(timeString);
}

export function getDateInputFormat(){
    return moment().format(inputFormat);
}

export function manipulateDate(time){
    return moment(time, "DD/MM/YYYY").format("YYYY-MM-DD")
}

function changeTimeFormat(time, formatInput, formatOutput){
    //We suppose time is in format YYYY-MM-DD
    return moment(time, formatInput).format(formatOutput)
}

export function showDate(time){
    return changeTimeFormat(time, inputFormat, readableFormat);
}