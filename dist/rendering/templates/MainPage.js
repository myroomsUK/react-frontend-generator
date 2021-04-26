import { jsx as _jsx } from "react/jsx-runtime";
import { SidebarLayout } from "./SidebarLayout";
import { Navbar } from "../components/navbar";
export function MainPage({ main }) {
    const navbar = _jsx(Navbar, {}, void 0);
    return _jsx(SidebarLayout, { main: main, navbar: navbar, title: "Myrooms PMS" }, void 0);
}
