import {Component} from 'react'

import { MainPage, CoffePage, GoodsPage, GoodsItemPage } from '../../pages/'

import aboutImage1 from '../../img/about/about1.jpg'
import aboutImage2 from '../../img/about/about2.jpg'
import aboutImage3 from '../../img/about/about3.jpg'

import './app.scss';

class App extends Component{

  constructor(props) {
    super(props)

    this.state = {
      existingPages: ['MainPage', 'CoffePage', 'GoodsPage', 'GoodsItemPage']
    }
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
          aboutImage={this.aboutImageCompute()}
          headerText={this.headerTextCompute()}
        />
      );
      case 'GoodsPage': return (
        <GoodsPage 
          aboutImage={this.aboutImageCompute()}
          headerText={this.headerTextCompute()}
        />
      );
      case 'GoodsItemPage': return (
       <GoodsItemPage 
        headerText={this.headerTextCompute()}
        />
      );
      default: return (
        <MainPage/>
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
