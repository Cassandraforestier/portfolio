import "../css/studies-page.css";

import { Tag, Timeline } from "antd";
import React, { useEffect, useState } from "react";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";

interface TimelineItem {
  date: string;
  subtitle: string;
  paragraphs: string[];
  bullets?: string[];
  link?: string;
}

const timelineItems: TimelineItem[] = [
  {
    date: "date0",
    subtitle: "Subtitle0",
    paragraphs: ["Paragraph0"],
    bullets: [
      "experience0.list.bullet1",
      "experience0.list.bullet2",
      "experience0.list.bullet3",
      "experience0.list.bullet4",
      "experience0.list.bullet5",
      "experience0.list.bullet6",
      "experience0.list.bullet7",
    ],
  },
  {
    date: "date1",
    subtitle: "Subtitle1",
    paragraphs: ["Paragraph1", "ParagraphSubtitle1"],
    bullets: [
      "experience1.list.bullet1",
      "experience1.list.bullet2",
      "experience1.list.bullet3",
      "experience1.list.bullet4",
      "experience1.list.bullet5",
      "experience1.list.bullet6",
      "experience1.list.bullet7",
    ],
  },
  {
    date: "date2",
    subtitle: "Subtitle2",
    paragraphs: ["Paragraph2", "ParagraphSubtitle2"],
    bullets: ["paragraph2information"],
  },
  {
    date: "date3",
    subtitle: "Subtitle3",
    paragraphs: ["Paragraph3", "ParagraphSubtitle3"],
    bullets: [
      "experience3.List1.bullet1",
      "experience3.List1.bullet2",
      "experience3.List1.bullet3",
      "experience3.List1.bullet4",
      "experience3.List1.bullet5",
      "experience3.List1.bullet6",
      "experience3.List2.bullet1",
      "experience3.List2.bullet2",
      "experience3.List2.bullet3",
      "experience3.List2.bullet4",
      "experience3.List2.bullet5",
      "experience3.List2.bullet6",
      "experience3.List2.bullet7",
      "experience3.List2.bullet8",
      "experience3.List2.bullet9",
    ],
  },
  {
    date: "date4",
    subtitle: "Subtitle4",
    paragraphs: ["Paragraph4", "ParagraphSubtitle4"],
  },
];

const ExperiencesPage: React.FC = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderTimelineItems = () => {
    return timelineItems.map((item, index) => (
      <Timeline.Item
        key={index}
        color="#008F8C"
        label={
          !isMobile && (
            <Tag className="study-tag">
              <Title level={5} className="study-tag-date">
                {t(`experiences.${item.date}`, { defaultValue: item.date })}
              </Title>
            </Tag>
          )
        }
      >
        <Title className="study-title" level={3}>
          {t(`experiences.${item.subtitle}`, { defaultValue: item.subtitle })}
        </Title>
        {isMobile && (
          <p>{t(`experiences.${item.date}`, { defaultValue: item.date })}</p>
        )}
        {item.paragraphs.map((paragraph, index) => (
          <p key={index}>
            {t(`experiences.${paragraph}`, { defaultValue: paragraph })}
          </p>
        ))}
        {item.bullets && item.bullets.length > 0 && (
          <ul>
            {item.bullets.map((bullet, index) => (
              <li key={index}>
                {t(`experiences.${bullet}`, { defaultValue: bullet })}
              </li>
            ))}
          </ul>
        )}
      </Timeline.Item>
    ));
  };

  return (
    <>
      <h1 className="studies-title">{t("experiences.Title")}</h1>
      <div style={{ margin: isMobile ? "" : "0 0 0 -120px" }}>
        <Timeline
          className="studies-timeline"
          mode={isMobile ? undefined : "left"}
        >
          {renderTimelineItems()}
        </Timeline>
      </div>
    </>
  );
};

export default ExperiencesPage;
