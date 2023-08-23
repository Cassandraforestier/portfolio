import Footer from "./page/footer";
import Menu from "./page/menu";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>

  );
}

export default Layout;