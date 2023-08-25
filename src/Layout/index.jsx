import { MemoryRouter, Outlet, createMemoryRouter } from "react-router-dom";
import Header from "../Layout/header/index";
import "../assets/css/main.css";
import memo from "react";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
