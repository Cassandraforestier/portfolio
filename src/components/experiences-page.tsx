import "../css/studies-page.css"

import { Tag, Timeline } from 'antd';

import React from 'react';
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";

const ExperiencesPage: React.FC = () => {
    const { t } = useTranslation();
    const isMobile: boolean = window.innerWidth <= 768;
    return (
        <>
            <Title level={1} className="studies-title">{t("experiences.Title")}</Title>
            <Timeline
                className="studies-timeline"
                mode={isMobile ? undefined : "left"}
                items={[
                    {
                        label: isMobile ? undefined : <Tag><Title level={5} className="study-tag-date">{t("experiences.date1")}</Title></Tag>,
                        children:
                            <>
                                <Title className="study-title" level={3}>{t("experiences.Subtitle1")}</Title>
                                {isMobile ? <p>{t("experiences.date1")}</p> : null}
                                <p>{t("experiences.Paragraph1")}</p>
                                <p>{t("experiences.ParagraphSubtile1")}</p>
                                <ul>
                                    <li>{t("experiences.experience1.list.bullet1")}</li>
                                    <li>{t("experiences.experience1.list.bullet2")}</li>
                                    <li>{t("experiences.experience1.list.bullet3")}</li>
                                    <li>{t("experiences.experience1.list.bullet4")}</li>
                                    <li>{t("experiences.experience1.list.bullet5")}</li>
                                    <li>{t("experiences.experience1.list.bullet6")}</li>
                                    <li>{t("experiences.experience1.list.bullet7")}</li>
                                </ul>
                            </>,
                    },
                    {
                        label: isMobile ? null : <Tag><Title level={5} className="study-tag-date">{t("experiences.date2")}</Title></Tag>,
                        children:
                            <>
                                <Title className="study-title" level={3}>{t("experiences.Subtitle2")}</Title>
                                {isMobile ? <p>{t("experiences.date2")}</p> : null}
                                <p>{t("experiences.Paragraph2")}</p>
                                <p>{t("experiences.ParagraphSubtile2")}</p>
                                <ul>
                                    <li>{t("experiences.paragraph2information")}</li>
                                </ul>
                            </>,
                    },
                    {
                        label: isMobile ? null : <Tag><Title level={5} className="study-tag-date">{t("experiences.date3")}</Title></Tag>,
                        children:
                            <>
                                <Title className="study-title" level={3}>{t("experiences.Subtitle3")}</Title>
                                {isMobile ? <p>{t("experiences.date3")}</p> : null}
                                <p>{t("experiences.Paragraph3")}</p>
                                <p>{t("experiences.ParagraphSubtile3")}</p>
                                <h5>{t("experiences.experience3.informationList1")}</h5>
                                <ul>
                                    <li>{t("experiences.experience3.List1.bullet1")}</li>
                                    <li>{t("experiences.experience3.List1.bullet2")}</li>
                                    <li>{t("experiences.experience3.List1.bullet3")}</li>
                                    <li>{t("experiences.experience3.List1.bullet4")}</li>
                                    <li>{t("experiences.experience3.List1.bullet5")}</li>
                                    <li>{t("experiences.experience3.List1.bullet6")}</li>
                                </ul>
                                <h5>{t("experiences.experience3.informationList2")}</h5>
                                <ul>
                                    <li>{t("experiences.experience3.List2.bullet1")}</li>
                                    <li>{t("experiences.experience3.List2.bullet2")}</li>
                                    <li>{t("experiences.experience3.List2.bullet3")}</li>
                                    <li>{t("experiences.experience3.List2.bullet4")}</li>
                                    <li>{t("experiences.experience3.List2.bullet5")}</li>
                                    <li>{t("experiences.experience3.List2.bullet6")}</li>
                                    <li>{t("experiences.experience3.List2.bullet7")}</li>
                                    <li>{t("experiences.experience3.List2.bullet8")}</li>
                                    <li>{t("experiences.experience3.List2.bullet9")}</li>
                                </ul>
                            </>,
                    },
                    {
                        label: isMobile ? null : <Tag><Title level={5} className="study-tag-date">{t("experiences.date4")}</Title></Tag>,
                        children:
                            <>
                                <Title className="study-title" level={3}>{t("experiences.Subtitle4")}</Title>
                                {isMobile ? <p>{t("experiences.date4")}</p> : null}
                                <p>{t("experiences.Paragraph4")}</p>
                                <p>{t("experiences.ParagraphSubtile4")}</p>
                            </>,
                    },
                ]}
            />
        </>
    );
}
export default ExperiencesPage;