import "../css/studies-page.css";

import { Tag, Timeline } from "antd";

import React from "react";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";

interface TimelineItem {
  date: string;
  subtitle: string;
  paragraphs: string[];
  link?: string;
}

const timelineItems: TimelineItem[] = [
  {
    date: "date0",
    subtitle: "Subtitle0",
    paragraphs: ["Paragraph0", "ParagraphSubtitle0"],
    link: "https://www.miage.fr/Specialite-M2/parcours-intense/",
  },
  {
    date: "date1",
    subtitle: "Subtitle1",
    paragraphs: ["Paragraph1", "paragraphAdditionnal", "ParagraphSubtile1"],
  },
  {
    date: "date2",
    subtitle: "Subtitle2",
    paragraphs: ["Paragraph2", "ParagraphSubtile2"],
  },
  {
    date: "date3",
    subtitle: "Subtitle3",
    paragraphs: ["Paragraph3", "ParagraphSubtile3"],
  },
  {
    date: "date4",
    subtitle: "Subtitle4",
    paragraphs: ["Paragraph4", "ParagraphSubtile4"],
  },
];

const StudiesPage: React.FC = () => {
  const { t } = useTranslation();
  const isMobile: boolean = window.innerWidth <= 768;
  return (
    <>
      <h1 className="studies-title">{t("studies.Title")}</h1>
      <div style={{ margin: isMobile ? "" : "0 0 0 -120px" }}>
        <Timeline
          className="studies-timeline"
          mode={isMobile ? undefined : "left"}
          items={timelineItems.map((item) => ({
            color: "#008F8C",

            label: isMobile ? undefined : (
              <Tag className="study-tag">
                <Title level={5} className="study-tag-date">
                  {t(`studies.${item.date}`, { defaultValue: item.date })}
                </Title>
              </Tag>
            ),
            children: (
              <>
                <Title className="study-title" level={3}>
                  {t(`studies.${item.subtitle}`, {
                    defaultValue: item.subtitle,
                  })}
                </Title>
                {isMobile ? (
                  <p>
                    {t(`studies.${item.date}`, { defaultValue: item.date })}
                  </p>
                ) : null}
                {item.paragraphs.map((paragraph, index) => (
                  <p key={index}>
                    {t(`studies.${paragraph}`, { defaultValue: paragraph })}
                  </p>
                ))}
                {item.link && (
                  <a target="_blank" rel="noreferrer" href={item.link}>
                    {t("studies.moreInformation")}
                  </a>
                )}
              </>
            ),
          }))}
        />
      </div>
    </>
  );
};
export default StudiesPage;
