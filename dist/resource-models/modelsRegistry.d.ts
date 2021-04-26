import { Resource } from "./Resource";
export declare function useGetResourceModel(resourceName: string): Resource;
export declare function useSetResourceModel(overrideRegistry: any, route?: string): boolean;
export declare function override(original: any, overrideElement: any): any;
