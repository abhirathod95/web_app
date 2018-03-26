import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'reactstrap';

import NavigationBar from './components/NavigationBar'

class App extends Component {
  render() {
    return (
      <NavigationBar />
    );
  }
}

export default App;
