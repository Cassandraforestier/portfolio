import "./css/App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ConfigProvider, Tag, Timeline, Typography } from "antd";
import CosplayMaker from "./components/cosplay-maker";
import ExperiencesPage from "./components/experiences-page";
import Layout from "./layout";
import MyTools from "./components/my-tools";
import PresentationPage from "./components/presentation-page";
import ProjectsPage from "./components/projects-page";
import React from "react";
import Spotifake from "./components/spotifake";
import StudiesPage from "./components/studies-page";
import TimelineItem from "antd/es/timeline/TimelineItem";

const themeCustom = {
  token: {
    colorInfo: "#E8FDF1",
    colorLink: "#008F8C",
    fontSize: 18,
    borderRadius: 6,
    colorBorder: "#008F8C",
    colorPrimary: "#008F8C",
    colorBorderSecondary: "#008F8C",
  },
  components: {
    Card: {
      headerBg: "#008F8C",
    },
    Carousel: {
      colorBgContainer: "#008F8C",
    },
  },
};

const App: React.FC = () => {
  return (
    <div className="root">
      <BrowserRouter basename="/portfolio">
        <ConfigProvider theme={themeCustom}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<PresentationPage />} />
              <Route path="/studiesPage" element={<StudiesPage />} />
              <Route path="/experiencesPage" element={<ExperiencesPage />} />
              <Route path="/projectPage" element={<ProjectsPage />} />
              <Route path="/cosplay-maker" element={<CosplayMaker />} />
              <Route path="/spotifake" element={<Spotifake />} />
              <Route path="/my-tools" element={<MyTools />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Route>
          </Routes>
        </ConfigProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
