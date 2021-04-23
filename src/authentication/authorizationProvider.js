import jwt_decode from "jwt-decode";
import {routes} from "../config/routes";


export const authProvider = {
    login: ({ email, password }) =>  {
        const request = new Request(routes.authentication_token, {
            method: 'POST',
            body: JSON.stringify({email, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                //console.log("auth token", auth)
                localStorage.setItem('token', JSON.stringify(auth.token));
            }).then(result => window.location.href="/");
    },
    logout: ()=>{
        localStorage.removeItem("token");
        return Promise.resolve().then(()=>window.location.href="/login");
    } ,
    checkAuth: () => localStorage.getItem('token')
        ? Promise.resolve()
        : Promise.reject(),
    checkError: error => Promise.resolve(),
    getPermissions: ()=>{
        const token = localStorage.getItem("token");
        const decodedToken = jwt_decode(token);
        const {roles} = decodedToken;
        return roles ? Promise.resolve(roles) : Promise.reject();

    },
    getIdentity: () =>{
        const token = localStorage.getItem("token");
        const decodedToken = jwt_decode(token);
        const {username: fullName, roles} = decodedToken;

        return  {fullName, roles};

    },
    checkTokenValidity: () => {
        const token = localStorage.getItem("token");
        if(token){
            const decodedToken = jwt_decode(token);
            const {exp} = decodedToken;
            const timeNow = Date.now();

            return timeNow/1000 < exp;
        }else{
            return false;
        }
    }
};