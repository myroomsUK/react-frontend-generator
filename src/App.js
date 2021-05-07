import React from 'react';
import './App.css';
import {authProvider} from "./authentication/authorizationProvider";
import {useLocation, Switch, Route, Redirect} from 'react-router-dom';
import SignIn from "./authentication/login";
import {MainPage} from "./rendering/templates/MainPage";
import {Create} from "./generators/pages/CreatePageGenerator";
import {GenericList} from "./generators/pages/ListPageGenerator";
import {EditPage} from "./generators/pages/EditPageGenerator";
import {Show} from "./generators/pages/ShowPageGenerator";
import Test from "./Test";

function App() {

    const token = localStorage.getItem('token');
    const tokenValid = authProvider.checkTokenValidity();
    const location = useLocation();

    const authenticatedRoutes = <Switch>
        <Route path="/login" render={() => <SignIn/>}/>
        <Route path="/test" render={() => <Test/>}/>
        <Route path="/:urlResourceName" exact render={() => <MainPage main={<GenericList />}/>} />
        <Route path="/:urlResourceName/:id/edit" exact render={() => <MainPage main={<EditPage  />} />}/>
        <Route path="/:urlResourceName/:id/show" exact render={() => <MainPage main={<Show />} />}/>
        <Route path="/" render={() => <MainPage main={<div>dashboard</div>} />}/>
    </Switch>

    const unauthenticatedRoutes =
        <Switch>
            <Route path="/login" render={() => <SignIn/>}/>
            <Route path="/">
                <Redirect
                    to={{
                        pathname: "/login",
                        search: "",
                        state: { referrer: location }
                    }}
                />
            </Route>
        </Switch>
    return <Test/>

    return  authenticatedRoutes;

}

export default App;