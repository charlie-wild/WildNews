import React, { Component } from 'react';
import {Router} from '@reach/router';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Article from './components/Article';
import User from './components/User';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';



class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Navbar/>
          <Sidebar/>
        <Router className="content">
          <Articles path="/"/>
          <Articles path="/:topic"/>
          <Article path="/articles/:article_id"/>
          <User path="/users/:username"/>
      </Router>
          <Footer/> 
      </div>
    );
  }
}

export default App;
