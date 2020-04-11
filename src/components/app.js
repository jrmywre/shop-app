import React, { Component } from 'react';
import Navbar from './navigation/navbar';
import LogoHeader from './logoHeader';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
      <Navbar/>
      <LogoHeader/>
      </div>
    );
  }
}

export default Layout;