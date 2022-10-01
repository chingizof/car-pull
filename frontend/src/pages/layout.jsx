import React from "react";
import {Outlet} from "react-router-dom";
import { Header } from "../components/header/header";

const Layout = () => {
    console.log("Hello")
  return (
    <>
        <Header />
        <Outlet />
    </>
  );
};

export default Layout;