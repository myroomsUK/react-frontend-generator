import { PropertyModel } from "./PropertyModel";
/**
 * @Property {id} - Name of the property
 */
export declare class PropertyModelRegistry {
    static get(id: string, others: any): PropertyModel;
}
