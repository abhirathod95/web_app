import React, { Component } from 'react';
import './App.css';

import NavigationBar from './components/NavigationBar'
import Content from './components/Content'
import Roadmap from './components/Roadmap'
import Whitepaper from './components/Whitepaper'
import Faq from './components/Faq'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
//import Footer from './components/Footer'


class App extends Component {
  
  render() {
    var navPages = [
      {"name" : "Home", "url" : "/", "component": Home},
      {"name" : "Roadmap", "url" : "/roadmap", "component": Roadmap},
      {"name" : "Whitepaper", "url" : "/whitepaper", "component": Whitepaper},
      {"name" : "FAQ", "url" : "/faq", "component": Faq},
      {"name" : "About Us", "url" : "/aboutus", "component": AboutUs}
    ]

    return (
      <div> 
      	<NavigationBar pages={navPages}/>
        <Content pages={navPages}/>
      </div>
    );
  }
}

export default App;
