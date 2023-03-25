import HeaderMainSection from './components/sections/header-main-section/header-main-section'
import AboutMainSection from './components/sections/about-main-section/about-main-section'
import GoodsItem from './components/UI/goods-item/goods-item'

import './App.scss';

function App() {
  return (
    <div className="App">
      <HeaderMainSection/>
      <AboutMainSection/>
      <GoodsItem/>
    </div>
  );
}

export default App;
