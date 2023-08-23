import "../css/presentation-page.css"

import avatarIcon from './../assets/avatar.png';
import { useTranslation } from "react-i18next";

const PresentationPage = () => {
    const { t } = useTranslation();
    return (
        <div className="presentation-container">
            <img src={avatarIcon} alt="avatar" className="avatar-icon" />
            <h1>{t("presentation.Title")}</h1>
            <div className="paragraph-container">
                <h2 level={2}>{t("presentation.Subtitle1")}</h2>
                <p>{t("presentation.Paragraph1")}</p>
                <p>{t("presentation.Paragraph2")}</p>

                <h2 level={2}>{t("presentation.Subtitle2")}</h2>
                <p>{t("presentation.Paragraph3")}</p>
                <p>{t("presentation.Paragraph4")}</p>

                <h2 level={2}>{t("presentation.Subtitle3")}</h2>
                <p>{t("presentation.Paragraph5")}</p>

                <h2 level={2}>{t("presentation.Subtitle4")}</h2>
                <p>{t("presentation.Paragraph6")}</p >
            </div>
        </div>
    );
}
export default PresentationPage;