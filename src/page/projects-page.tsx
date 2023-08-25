import "../css/projects-page.css"

import { Button, Card, Carousel } from 'antd';

import { GithubOutlined } from '@ant-design/icons';
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { Meta } = Card;

interface Project {
    title: string;
    description: string;
    image: string[];
    link: string;
    navigate: string;
}

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const projects: Project[] = [
    {
      title: "Cosplay-Maker",
      description: t("cosplaymaker.description"),
      image: ["cosplaymaker-img/CM1.png", "cosplaymaker-img/CM3.png", "cosplaymaker-img/cm4.png", "cosplaymaker-img/cm6.png", "cosplaymaker-img/cm7.png", "cosplaymaker-img/cm8.png"],
      link: "https://github.com/Cassandraforestier/cosplay-maker",
      navigate: "/cosplay-maker"
    },
    {
      title: "Spotifake",
      description: t("spotifake.description"),
      image: ["spotifake-img/spotify1.png", "spotifake-img/spotify2.png", "spotifake-img/spotify3.png", "spotifake-img/spotify4.png", "spotifake-img/spotify6.png", "spotifake-img/spotify7.png"],
      link: "https://github.com/Le-Bocal-Academy/spotifake-rage-against-the-machine-code",
      navigate: "/spotifake"
    },

  ]
  return (
    <div className="projects-container" >
      <h1>{t("project.project-title")}</h1>
      <div className="card-container">
        {projects.map((project, index) => (
          <Card
            hoverable
            className="card"
            cover={<Carousel autoplay>
              {project.image.map((image, index) => (
                <div>
                  <img className="img-carousel" alt={project.title + index} src={image} />
                </div>
              ))}
            </Carousel>}
          >
            <Meta title={project.title} className="meta-container" description=
              {project.description}
            />
            <div>
              <p><a href={project.link} target='_blank' rel="noreferrer"><GithubOutlined />{t("project.github-link")}</a></p>

              <Button className="card-btn" onClick={() => { navigate(project.navigate); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>{t("project.more-info")}</Button>
            </div>
          </Card>))}

      </div>
    </div >
  );
}
export default ProjectsPage;