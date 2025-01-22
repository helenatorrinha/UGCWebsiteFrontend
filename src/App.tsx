import './styles/global.scss';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import WhatIsUGC from './components/WhatIsUGC/WhatIsUGC';

function App() {
  return (
    <div>
      <div className="center">
        <h1>Portfolio</h1>
      </div>
      <Navbar />
      <AboutMe />
      <WhatIsUGC />
    </div>
    
  ); 
}

export default App;