import React, { Component } from 'react';
import {Router} from '@reach/router';
import './App.css';
import * as api from './components/api'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Articles from './components/Articles';
import Article from './components/Article';
import User from './components/User';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Auth from './components/Auth';
import AddTopic from './components/AddTopic'
import AddArticle from './components/AddArticle';



class App extends Component {
  state = {
    user: {},
    topics: [],
  }
  render() {
    return (
      <div className="App">
          <Header/>
        <Auth user={this.state.user} login={this.login}>
          <Navbar topics={this.state.topics}/>
          <Sidebar user={this.state.user} logout={this.logout}/>
        <Router className="content">
          <Articles path="/"/>
          <Articles path="/:topic"/>
          <Article user={this.state.user} path="/articles/:article_id"/>
          <AddTopic path='/create_topic'/>
          <AddArticle user={this.state.user} topics={this.state.topics} path='/create_article' />
          <User user={this.state.user} path="/users/:username"/>
      </Router>
        </Auth>
          <Footer/> 
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics()
    if(localStorage.getItem('user') && !this.state.user.username) {
      this.setState({user: JSON.parse(localStorage.getItem('user'))});
    }
  }

  login = user => {
    this.setState({
      user
    })
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout = () => {
    this.setState({
      user: {}
    })
    localStorage.clear();
  }

  fetchTopics = () => {
  api.getTopics().then((topics) => {
    this.setState({ topics })
  })
}
}

export default App;
