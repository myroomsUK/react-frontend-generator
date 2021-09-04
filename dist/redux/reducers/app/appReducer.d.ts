export default appReducer;
declare function appReducer(state: {
    resource: null;
    statusBar: {
        message: undefined;
        severity: string;
    };
    resourceBuffer: Set<any>;
    listings: Map<any, any>;
    registry: never[];
} | undefined, action: any): {
    resource: any;
    statusBar: {
        message: undefined;
        severity: string;
    };
    resourceBuffer: Set<any>;
    listings: Map<any, any>;
    registry: never[];
} | {
    theme: any;
    resource: null;
    statusBar: {
        message: undefined;
        severity: string;
    };
    resourceBuffer: Set<any>;
    listings: Map<any, any>;
    registry: never[];
} | {
    statusBar: {
        message: any;
        severity: any;
    };
    resource: null;
    resourceBuffer: Set<any>;
    listings: Map<any, any>;
    registry: never[];
} | {
    listings: any;
    resource: null;
    statusBar: {
        message: undefined;
        severity: string;
    };
    resourceBuffer: Set<any>;
    registry: never[];
} | {
    registry: any;
    resource: null;
    statusBar: {
        message: undefined;
        severity: string;
    };
    resourceBuffer: Set<any>;
    listings: Map<any, any>;
};
