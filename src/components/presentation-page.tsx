import "../css/presentation-page.css";

import React from "react";
import { useTranslation } from "react-i18next";
import avatarIcon from "../assets/avatar.png";
import {
  CodeOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { Space, Tooltip } from "antd";
interface Link {
  title: string;
  link: string;
  icon: JSX.Element;
}

const allLinks: Link[] = [
  {
    title: "Github",
    link: "https://github.com/Cassandraforestier",
    icon: <GithubOutlined style={{ fontSize: "32px" }} />,
  },
  {
    title: "Codingame",
    link: "https://www.codingame.com/profile/62704d19c92e1eb821b93fa72ea592650785233",
    icon: <CodeOutlined style={{ fontSize: "32px" }} />,
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/cassandra-forestier-964b4514b/",
    icon: <LinkedinOutlined style={{ fontSize: "32px" }} />,
  },
];

const PresentationPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        marginTop: "7rem",
      }}
    >
      <div className="presentation-container">
        <h1 className="title-presentation">{t("presentation.Title")}</h1>
        <h2>{t("presentation.Subtitle1")}</h2>
        <p>
          {t("presentation.Paragraph2")}
          <strong>{t("presentation.Obtention")}</strong>
        </p>
        <h2>{t("presentation.Subtitle2")}</h2>
        <p>{t("presentation.Paragraph3")}</p>
        <p>{t("presentation.Paragraph4")}</p>
      </div>
      <div className="card-presentation">
        <img src={avatarIcon} alt="avatar" className="avatar-icon" />
        <div className="card-details">
          <h1>Cassandra Forestier</h1>
          <p>{t("presentation.job")}</p>
          <a href="mailto:cassandra.forestier@hotmail.fr">
            <strong>cassandra.forestier@hotmail.fr</strong>
          </a>
          <p>{t("footer.driver")}</p>
          <p>{t("footer.sector")}</p>
          <Space size="middle" className="space-follow-me">
            {allLinks.map((link) => (
              <Tooltip placement="topLeft" title={link.title}>
                <a target="_blank" rel="noreferrer" href={link.link}>
                  {link.icon}
                </a>
              </Tooltip>
            ))}
          </Space>
        </div>
      </div>
    </div>
  );
};
export default PresentationPage;
