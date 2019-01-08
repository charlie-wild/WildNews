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
import Auth from './components/Auth';



class App extends Component {
  state = {
    user: {}
  }
  render() {
    return (
      <div className="App">
          <Header/>
        <Auth user={this.state.user} login={this.Login}>
          <Navbar/>
          <Sidebar/>
        <Router className="content">
          <Articles path="/"/>
          <Articles path="/:topic"/>
          <Article path="/articles/:article_id"/>
          <User path="/users/:username"/>
      </Router>
        </Auth>
          <Footer/> 
      </div>
    );
  }

  Login = user => {
    this.setState({
      user
    })
  }
}

export default App;
