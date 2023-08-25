import Footer from './components/footer';
import MenuNavbar from "./components/menu";
import { Outlet } from "react-router-dom";
import React from "react";

const Layout: React.FC = () => {
  return (
    <>
      <MenuNavbar />
      <Outlet />
      <Footer />
    </>

  );
}

export default Layout;