/// <reference types="react" />
import { Record } from "../../../resource-models/Record";
interface ShowProps {
    propResourceName: string;
    propId: number;
    record: Record;
    propShowPage?: any;
}
export declare const Show: ({ propResourceName, propId: id, record, propShowPage }: ShowProps) => JSX.Element;
export {};
