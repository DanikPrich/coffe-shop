import { Component } from 'react'

import { MainPage, CoffePage, GoodsPage, GoodsItemPage } from '../../pages/'

import './app.scss';

class App extends Component{
  render() {
    return (
      <div className="App">
        <MainPage/>
        <CoffePage/>
        <GoodsPage/>
        <GoodsItemPage/>
      </div>
    );
  }
}

export default App;
