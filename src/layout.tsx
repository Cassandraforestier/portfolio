import React from "react";
import { Outlet } from "react-router-dom";
import { Row, Col } from "antd";
import MenuNavbar from "./components/menu";
import "./css/presentation-page.css";

const Layout: React.FC = () => {
  return (
    <div className="layout-container">
      <MenuNavbar />
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
    </div>
  );
};

export default Layout;
