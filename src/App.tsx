import './styles/global.scss';
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import WhatIsUGC from './components/WhatIsUGC/WhatIsUGC';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <WhatIsUGC />
    </div>
    
  ); 
}

export default App;