import React from "react";
import {SidebarLayout} from "./SidebarLayout";
import {Navbar} from "../components/navbar";

export function MainPage({main}){

    const navbar = <Navbar/>

    return <SidebarLayout main={main} navbar={navbar} title="Myrooms PMS"/>
}