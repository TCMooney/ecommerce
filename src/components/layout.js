import React, { Component } from 'react';

import Header from './headerNavBar/header'
import NavBar from './headerNavBar/navBar'

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header/>
        <NavBar/>
      </div>
    );
  }
}

export default Layout;
