/// <reference types="react" />
export declare function useResource(resourceName: string, propId: number): {
    record: {};
    setRecord: import("react").Dispatch<import("react").SetStateAction<{}>>;
};
export declare function useResources(resourceName: string): {
    record: {};
    setRecord: import("react").Dispatch<import("react").SetStateAction<{}>>;
};
