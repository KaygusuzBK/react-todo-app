import { Outlet } from "react-router-dom";
import Header from "../Layout/header/index";
import "../assets/css/main.css";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
