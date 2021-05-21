import React from "react";
import { Record } from '../../../resource-models/Record';
interface EditFormGeneratorProps {
    propResourceName: string;
    propId: number;
    record: Record;
    propEditPage?: any;
    thenFunction?: any;
    catchfunction?: any;
}
/**
 *
 * @param record
 * @param propId
 * @param propResourceName
 * @param propEditPage
 * @param catchfunction
 * @param thenFunction
 * @constructor
 *
 * This function returns a react component with the edit form. This component is not responsible for fetching previous data.
 */
export declare const EditForm: React.FC<EditFormGeneratorProps>;
export {};
