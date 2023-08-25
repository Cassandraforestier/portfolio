import Footer from './page/footer.tsx';
import MenuNavbar from "./page/menu.tsx";
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