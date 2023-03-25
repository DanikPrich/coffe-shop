import {Component} from 'react'

import MainPage from './pages/main-page';
import CoffePage from './pages/coffe-page';
import GoodsPage from './pages/goods-page';
import GoodsItemPage from './pages/goods-item-page';

import aboutImage1 from './img/about/about1.jpg'
import aboutImage2 from './img/about/about2.jpg'
import aboutImage3 from './img/about/about3.jpg'

import './App.scss';

class App extends Component{

  constructor(props) {
    super(props)

    this.state = {
      currentPage: 'MainPage',
      existingPages: ['MainPage', 'CoffePage', 'GoodsPage', 'GoodsItemPage']
    }
  }

  onNavigation = (newPage) => {
    this.setState({
      currentPage: newPage
    })
  }

  aboutImageCompute = () => {
    if(this.state.currentPage === 'CoffePage') return aboutImage3
    return aboutImage2
  }

  headerTextCompute = () => {
    if(this.state.currentPage === 'GoodsPage') return 'For your pleasure'
    return 'Our Coffee'
  }

  currentPage = () => {
    switch (this.state.currentPage) {
      case 'CoffePage': return (
        <CoffePage 
          onNavigation={this.onNavigation}
          aboutImage={this.aboutImageCompute()}
          headerText={this.headerTextCompute()}
        />
      );
      case 'GoodsPage': return (
        <GoodsPage 
          onNavigation={this.onNavigation}
          aboutImage={this.aboutImageCompute()}
          headerText={this.headerTextCompute()}
        />
      );
      case 'GoodsItemPage': return (
       <GoodsItemPage 
        onNavigation={this.onNavigation}
        headerText={this.headerTextCompute()}
        />
      );
      default: return (
        <MainPage onNavigation={this.onNavigation}/>
      ) 
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
