import React, { Component } from 'react';
import Header from './Header';
import FileExplorer from './FileExplorer';
import logo from './logo.svg';
import './App.css';
import avatar from './imgavatar.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" />
        
        <header className="App-header">
         <Header />
        </header>
        <div className="App-intro">
          <FileExplorer />
        </div>

      </div>
    );
  }
}

export default App;
