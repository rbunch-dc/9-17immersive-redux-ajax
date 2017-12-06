import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './containers/SearchBar';
// import {Home, About} from './Pages'
import Weather from './containers/Weather';
import Stocks from './containers/Stocks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
        	<SearchBar />
        	<div className="col-sm-6">
	        	<Weather />
	        </div>
        	<div className="col-sm-6">
	        	<Stocks />
	        </div>	        
        </div>
      </div>
    );
  }
}

export default App;
