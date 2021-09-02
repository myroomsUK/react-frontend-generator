export default appReducer;
declare function appReducer(state: {
    resource: null;
    theme: any;
    statusBar: {
        message: undefined;
        severity: string;
    };
    resourceBuffer: Set<any>;
    listings: Map<any, any>;
    registry: never[];
} | undefined, action: any): {
    resource: any;
    theme: any;
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
    theme: any;
    resourceBuffer: Set<any>;
    listings: Map<any, any>;
    registry: never[];
} | {
    listings: any;
    resource: null;
    theme: any;
    statusBar: {
        message: undefined;
        severity: string;
    };
    resourceBuffer: Set<any>;
    registry: never[];
} | {
    registry: any;
    resource: null;
    theme: any;
    statusBar: {
        message: undefined;
        severity: string;
    };
    resourceBuffer: Set<any>;
    listings: Map<any, any>;
};
