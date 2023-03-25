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
      currentPage: 'MainPage',
      existingPages: ['MainPage', 'CoffePage', 'GoodsPage', 'GoodsItemPage']
    }
  }

  onNavigation = (e) => {
    const newPage = e.target.getAttribute('data-nav')
    this.setState({
      currentPage: newPage
    })
  }

  currentPage = () => {
    switch (this.state.currentPage) {
      case 'CoffePage': return <CoffePage onNavigation={this.onNavigation}/>;
      case 'GoodsPage': return <GoodsPage onNavigation={this.onNavigation}/>;
      case 'GoodsItemPage': return <GoodsItemPage onNavigation={this.onNavigation}/>;
      default: return <MainPage onNavigation={this.onNavigation}/>
    }
    
    
  }

  render() {
    return (
      <div className="App">
       {this.currentPage()}
      </div>
    );
  }
}

export default App;
