import "../css/studies-page.css"

import { Tag, Timeline } from 'antd';

import React from 'react';
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";

const StudiesPage = () => {
    const { t } = useTranslation();
    const isMobile = window.innerWidth <= 768;
    return (
        <>
            <Title level={1} className="studies-title">{t("studies.Title")}</Title>
            <Timeline
                className="studies-timeline"
                mode={isMobile ? undefined : "left"}
                items={[
                    {
                        label: isMobile ? undefined : <Tag><Title level={5} style={{ margin: "0" }}>{t("studies.date1")}</Title></Tag>,
                        children:
                            <>
                                <Title className="study-title" level={3}>{t("studies.Subtitle1")}</Title>
                                {isMobile ? <p>{t("studies.date1")}</p> : null}
                                <p>{t("studies.Paragraph1")}</p>
                                <p>{t("studies.paragraphAdditionnal")}</p>
                                <p>{t("studies.ParagraphSubtile1")}</p>
                                <a target='_blank' rel="noreferrer" href='https://lebocal.academy/formations/developpeur-web-devops-en-alternance'>{t("studies.moreInformation")}</a>
                            </>,
                    },
                    {
                        label: isMobile ? null : <Tag><Title level={5} style={{ margin: "0" }}>{t("studies.date2")}</Title></Tag>,
                        children:
                            <>
                                <Title className="study-title" level={3}>{t("studies.Subtitle2")}</Title>
                                {isMobile ? <p>{t("studies.date2")}</p> : null}
                                <p>{t("studies.Paragraph2")}</p>
                                <p>{t("studies.ParagraphSubtile2")}</p>
                            </>,
                    },
                    {
                        label: isMobile ? null : <Tag><Title level={5} style={{ margin: "0" }}>{t("studies.date3")}</Title></Tag>,
                        children:
                            <>
                                <Title className="study-title" level={3}>{t("studies.Subtitle3")}</Title>
                                {isMobile ? <p>{t("studies.date3")}</p> : null}
                                <p>{t("studies.Paragraph3")}</p>
                                <p>{t("studies.ParagraphSubtile3")}</p>
                            </>,
                    },
                    {
                        label: isMobile ? null : <Tag><Title level={5} style={{ margin: "0" }}>{t("studies.date4")}</Title></Tag>,
                        children:
                            <>
                                <Title className="study-title" level={3}>{t("studies.Subtitle4")}</Title>
                                {isMobile ? <p>{t("studies.date4")}</p> : null}
                                <p>{t("studies.Paragraph4")}</p>
                                <p>{t("studies.ParagraphSubtile4")}</p>
                            </>,
                    },
                ]}
            />
        </>
    );
}
export default StudiesPage;