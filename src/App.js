import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './views/Tabs/Tabs';
import Footer  from './Footer';
import Header from './Header';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Header></Header>
       <Tabs></Tabs>
       <Footer></Footer>
      </div>
    );
  }
}

export default App;
