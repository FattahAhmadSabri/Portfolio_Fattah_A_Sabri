import React from 'react';

import WelcomePage from './components/welcome';
import ExperiencePage from './components/experiance';
import PortfolioPage from './components/navbar'
import ProjectsPage from './components/projects';

const App: React.FC = () => {
  return (
    <div>
      <PortfolioPage/>
      <WelcomePage />
      <ExperiencePage />
      < ProjectsPage/>

     
    </div>
  );
};

export default App;
