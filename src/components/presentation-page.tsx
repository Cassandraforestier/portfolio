import "../css/presentation-page.css";

import React from "react";
import avatarIcon from "../assets/avatar.png";
import { useTranslation } from "react-i18next";

const PresentationPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="presentation-container">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className="card-presentation">
          <img src={avatarIcon} alt="avatar" className="avatar-icon" />
          <div>
            <h1>Cassandra Forestier</h1>
            <p>Développeuse Web Frontend React</p>
          </div>
        </div>
      </div>
      <div>
        <div className="paragraph-container">
          <h1>{t("presentation.Title")}</h1>
          <h2>{t("presentation.Subtitle1")}</h2>
          <p>{t("presentation.Paragraph2")}</p>
          <h2>{t("presentation.Subtitle2")}</h2>
          <p>{t("presentation.Paragraph3")}</p>
          <p>{t("presentation.Paragraph4")}</p>
          <h2>{t("presentation.Subtitle4")}</h2>
          <p>{t("presentation.Paragraph6")}</p>
        </div>
      </div>
    </div>
  );
};
export default PresentationPage;
