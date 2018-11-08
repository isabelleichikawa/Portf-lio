import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './components/header/Header'
import Profile from './components/profile/Profile'
import Skill from './components/skill/Skill';
import Blog from './components/blog/Blog';
import Portfolio from './components/portfolio/Portfolio';
import Info from './components/info/Info';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Profile />
        <Skill />
        <Blog />
        <Portfolio />
        <Info />
        <Form />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
