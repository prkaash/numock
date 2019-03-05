import React, { Component } from 'react';
import logo from './logo.svg';
import avatar from './imgavatar.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="Header Body">
        <div class="Menu">
          <i class="zmdi zmdi-menu"></i>
        </div>
        <div class="Logo">
        <img src={logo} alt="Avatar" style={{height:24}}/>
        </div>
        
        <div class="SearchBar">
          <div><i class="zmdi zmdi-search zmdi-hc-lg zmdi-hc-fw"></i></div>
          <div><input class="SearchInput" placeholder="workspace" /></div>
        </div>
        <div class="Icon">
          <i class="zmdi zmdi-account-add zmdi-hc-fw"></i>
          <div class="Body Icon-text">Invite People</div>
        </div>
        <div class="Icon" style={{color: "#fbb034"}}>
          <i class="zmdi zmdi-star zmdi-hc-fw"></i>
          <div class="Body Icon-text"style={{color: "#fbb034"}}>Upgrade</div>
        </div>
        
        
        <div><img src={avatar} alt="Avatar" class="Avatar"/></div>
      </div>
    );
  }
}

export default Header;