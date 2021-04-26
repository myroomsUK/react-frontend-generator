export default appReducer;
declare function appReducer(state: {
    resource: null;
    theme: import("@material-ui/core").Theme;
    statusBar: {
        message: undefined;
        severity: string;
    };
    resourceBuffer: Set<any>;
    listings: Map<any, any>;
    registry: never[];
} | undefined, action: any): {
    resource: any;
    theme: import("@material-ui/core").Theme;
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
    theme: import("@material-ui/core").Theme;
    resourceBuffer: Set<any>;
    listings: Map<any, any>;
    registry: never[];
} | {
    listings: any;
    resource: null;
    theme: import("@material-ui/core").Theme;
    statusBar: {
        message: undefined;
        severity: string;
    };
    resourceBuffer: Set<any>;
    registry: never[];
} | {
    registry: any;
    resource: null;
    theme: import("@material-ui/core").Theme;
    statusBar: {
        message: undefined;
        severity: string;
    };
    resourceBuffer: Set<any>;
    listings: Map<any, any>;
};
