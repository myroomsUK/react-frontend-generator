import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { authProvider } from "./authentication/authorizationProvider";
import { useLocation, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from "./authentication/login";
import { MainPage } from "./rendering/templates/MainPage";
import { GenericList } from "./generators/pages/ListPageGenerator";
import { EditPage } from "./generators/pages/EditPageGenerator";
import { Show } from "./generators/pages/ShowPageGenerator";
import Test from "./Test";
function App() {
    const token = localStorage.getItem('token');
    const tokenValid = authProvider.checkTokenValidity();
    const location = useLocation();
    const authenticatedRoutes = _jsxs(Switch, { children: [_jsx(Route, { path: "/login", render: () => _jsx(SignIn, {}, void 0) }, void 0),
            _jsx(Route, { path: "/test", render: () => _jsx(Test, {}, void 0) }, void 0),
            _jsx(Route, { path: "/:urlResourceName", exact: true, render: () => _jsx(MainPage, { main: _jsx(GenericList, {}, void 0) }, void 0) }, void 0),
            _jsx(Route, { path: "/:urlResourceName/:id/edit", exact: true, render: () => _jsx(MainPage, { main: _jsx(EditPage, {}, void 0) }, void 0) }, void 0),
            _jsx(Route, { path: "/:urlResourceName/:id/show", exact: true, render: () => _jsx(MainPage, { main: _jsx(Show, {}, void 0) }, void 0) }, void 0),
            _jsx(Route, { path: "/", render: () => _jsx(MainPage, { main: _jsx("div", { children: "dashboard" }, void 0) }, void 0) }, void 0)] }, void 0);
    const unauthenticatedRoutes = _jsxs(Switch, { children: [_jsx(Route, { path: "/login", render: () => _jsx(SignIn, {}, void 0) }, void 0),
            _jsx(Route, Object.assign({ path: "/" }, { children: _jsx(Redirect, { to: {
                        pathname: "/login",
                        search: "",
                        state: { referrer: location }
                    } }, void 0) }), void 0)] }, void 0);
    return _jsx(Test, {}, void 0);
    return authenticatedRoutes;
}
export default App;
