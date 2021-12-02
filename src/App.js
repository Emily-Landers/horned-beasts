import React, { Component } from 'react';
import Main from './Main.js';
import Footer from './Footer.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <Main />
        <Footer />
      </div>
    )
  }
}
