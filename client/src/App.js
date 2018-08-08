import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import ShopingList from './components/shoppinglist';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ShopingList/>
      </div>
    );
  }
}

export default App;
