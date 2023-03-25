import {Component} from 'react'

import MainPage from './pages/main-page';
import CoffePage from './pages/coffe-page';
import GoodsPage from './pages/goods-page';
import GoodsItemPage from './pages/goods-item-page';

import './App.scss';

class App extends Component{

  constructor(props) {
    super(props)

    this.state = {
      page: 'MainPage'
    }
  }

  render() {
    return (
      <div className="App">
        <MainPage/>
      </div>
    );
  }
}

export default App;
