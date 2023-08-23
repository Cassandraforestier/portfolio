import './css/App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';

import CosplayMaker from './page/cosplay-maker';
import Layout from './layout';
import MyTools from './page/my-tools';
import PresentationPage from './page/presentation-page';
import ProjectsPage from './page/projects-page';
import Spotifake from './page/spotifake';
import StudiesPage from './page/studies-page';

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

function App() {
  return (
    <div className="root">
      <BrowserRouter basename='/portfolio'>
        <ConfigProvider theme={themeCustom}>
          <Routes>
            <Route path="/" element={<Layout />}  >
              <Route index element={<PresentationPage />} />
              <Route path="/studiesPage" element={<StudiesPage />} />
              <Route path="/aboutPage" element={<h1>coucou</h1>} />
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
