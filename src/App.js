import HeaderMainSection from './components/sections/header-main-section/header-main-section'
import AboutMainSection from './components/sections/about-main-section/about-main-section'
import OurBestSection from './components/sections/our-best-section/our-best-section'

import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderMainSection/>
      <AboutMainSection/>
      <OurBestSection/>
    </div>
  );
}

export default App;
