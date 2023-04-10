import { Components } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { MainPage, CoffePage, GoodsPage, GoodsItemPage } from '../../pages/'

import './app.scss';

const App = () => {
  return (
<Router>
  <div className="App">
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="coffe" element={<CoffePage/>}/>
      <Route path="goods" element={<GoodsPage/>}/>
      <Route path="goods/:id"element={<GoodsItemPage/>}/>
    </Routes>
  </div>
</Router>
  );
}

export default App;
