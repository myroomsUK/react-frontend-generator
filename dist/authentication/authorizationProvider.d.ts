export namespace authProvider {
    function login({ email, password }: {
        email: any;
        password: any;
    }): Promise<string>;
    function logout(): Promise<string>;
    function checkAuth(): Promise<void>;
    function checkError(error: any): Promise<void>;
    function getPermissions(): Promise<any>;
    function getIdentity(): {
        fullName: any;
        roles: any;
    };
    function checkTokenValidity(): boolean;
}
