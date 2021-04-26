import { Resource } from "./Resource";
export declare class ResourceRegistry {
    registry: Resource[];
    constructor();
    getResource(resourceName: string): Resource | undefined;
    static get(): ResourceRegistry;
}
