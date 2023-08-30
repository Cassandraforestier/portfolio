import './css/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ConfigProvider } from 'antd';
import CosplayMaker from './components/cosplay-maker';
import ExperiencesPage from './components/experiences-page';
import Layout from './layout';
import MyTools from './components/my-tools';
import PresentationPage from './components/presentation-page';
import ProjectsPage from './components/projects-page';
import React from 'react';
import Spotifake from './components/spotifake';
import StudiesPage from './components/studies-page';

const themeCustom = {
  "token": {
    "colorPrimary": "#46b0b8",
    "colorInfo": "#46b0b8",
    "colorTextBase": "#ffffff",
    "colorLink": "#46b0b8",
    "fontSize": 18,
    "borderRadius": 6,
    "colorBgBase": "#122044",
    "colorBorder": "#46b0b8",
    "colorBorderSecondary": "rgb(70, 176, 184)",
  },
  "components": {
    "Card": {
      "headerBg": "rgb(70, 176, 184)",
    },
    "Typography": {
      "colorTextHeading": "#fff"
    },
    "Carousel": {
      "colorBgContainer": "rgb(255, 255, 255)"
    },
    "Tooltip": {
      "colorBgSpotlight": "#46b0b8"
    }
  },
}

const App: React.FC = () => {
  return (
    <div className="root">
      <BrowserRouter basename='/portfolio'>
        <ConfigProvider theme={themeCustom}>
          <Routes>
            <Route path="/" element={<Layout />}  >
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
    </div >
  );
}

export default App;
