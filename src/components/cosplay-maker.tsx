import "../css/cosplay-maker.css";

import { Button, Card } from "antd";

import { DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Paragraph from "antd/es/typography/Paragraph";
import React from "react";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";

const CosplayMaker: React.FC = () => {
  const { t } = useTranslation();
  const isMobile: boolean = window.innerWidth <= 767;
  return (
    <div className="cosplaymaker-container">
      <h1 style={{ color: "white", marginBottom: "11rem" }}>Cosplay-Maker</h1>
      <div className="cosplaymaker-resume">
        <Paragraph>{t("cosplaymaker.description")}</Paragraph>
        <Paragraph>{t("cosplaymaker.paragraph-desc")}</Paragraph>
        <Paragraph>{t("cosplaymaker.paragraph-desc2")}</Paragraph>
      </div>
      <Title level={3}>{t("cosplaymaker.technologies")}</Title>
      <div className="card-container">
        <Card title="Front-end" className="card-frontend">
          <div>
            <img src="logo/html.png" alt="Html icon" className="html-icon" />
            <img src="logo/css.png" alt="Css icon" className="css-icon" />
          </div>
          <div>
            <img src="logo/react.png" alt="React icon" className="react-icon" />
            <img
              src="logo/antdesign.png"
              alt="Ant Design icon"
              className="antd-icon"
            />
          </div>
        </Card>
        <Card title="Back-end" className="card-backend">
          <img
            src="logo/nodejs.png"
            alt="NodeJS icon"
            className="nodejs-icon"
          />
          <img
            src="logo/expressjs.png"
            alt="Express icon"
            className="express-icon"
          />
        </Card>
        <Card title={t("cosplaymaker.database-card")} className="card-database">
          <img
            src="logo/mongodb.png"
            alt="MongoDB icon"
            className="mongodb-icon"
          />
          <img
            src="logo/mongoose.png"
            alt="Mongoose icon"
            className="mongoose-icon"
          />
        </Card>
        <Card title="DevOps" className="card-devops">
          <img
            src="logo/docker.png"
            alt="Docker icon"
            className="docker-icon"
          />
          <img
            src="logo/githubactions.png"
            alt="Github action icon"
            className="github-icon"
          />
        </Card>
        <Card
          title={t("cosplaymaker.mobile-application-card")}
          className="card-mobile"
        >
          <img
            src="logo/reactnative.png"
            alt="React-native icon"
            className="react-native-icon"
          />
        </Card>
      </div>

      {isMobile ? (
        <div className="download-btn">
          <Title level={5}>{t("cosplaymaker.download")}</Title>
          <Button
            href="ppt.pdf"
            download="ppt.pdf"
            className="pdf-download-link"
          >
            <DownloadOutlined />
            {t("cosplaymaker.download-powerpoint")}
          </Button>
          <Button
            href="rapport-cosplay-maker.pdf"
            download="rapport-cosplay-maker.pdf"
            className="pdf-download-link"
          >
            <DownloadOutlined />
            {t("cosplaymaker.download-report")}
          </Button>
        </div>
      ) : (
        <>
          <embed
            src="ppt.pdf"
            width="60%"
            height="600"
            type="application/pdf"
            className="ppt-display"
          />
          <embed
            src="rapport-cosplay-maker.pdf"
            width="60%"
            height="600"
            type="application/pdf"
            className="pdf-display"
          />
        </>
      )}
    </div>
  );
};
export default CosplayMaker;
