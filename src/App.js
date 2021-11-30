import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
