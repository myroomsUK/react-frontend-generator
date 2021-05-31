import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import {Operation} from "./Operation";

export class OperationButtonFactory{

    static getOperationButton({icon, text, color, onClick} : Operation){
        if(icon){
            // @ts-ignore
            return <IconButton variant="contained" color={color} onClick={onClick}>{icon}</IconButton>
        }
        // @ts-ignore
        return <Button  variant="contained" color={color} onClick={onClick}>{text}</Button>
    }
}