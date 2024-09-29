import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Row, Col } from "antd";
import MenuNavbar from "./components/menu";
import "./css/presentation-page.css";

const Layout: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="layout-container">
      <MenuNavbar />
      {isMobile ? (
        <Outlet />
      ) : (
        <Row justify="center" className="grid-container">
          <Col flex="1" className="grid-empty"></Col>
          <Col
            flex="1600px"
            className="grid-content"
            style={{ maxWidth: "1600px" }}
          >
            <Outlet />
          </Col>
          <Col flex="1" className="grid-empty"></Col>
        </Row>
      )}
    </div>
  );
};

export default Layout;
