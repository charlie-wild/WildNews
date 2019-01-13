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
import Auth from './components/Auth';
import AddTopic from './components/AddTopic'
import AddArticle from './components/AddArticle';
import Users from './components/Users';
import Errors from './components/Errors';



class App extends Component {
  state = {
    user: {},
    topics: [],
  }
  render() {
    return (
      <div className="App">
          <Header user={this.state.user} logout={this.logout}/>
        <Auth user={this.state.user} login={this.login}>
          <Navbar topics={this.state.topics} user={this.state.user} logout={this.logout}/>
          <Router className="content">
          <Articles path="/"/>
          <Articles user={this.state.user} path="/:topic"/>
          <Article user={this.state.user} path="/articles/:article_id"/>
          <AddTopic path='/create_topic'/>
          <AddArticle user={this.state.user} topics={this.state.topics} path='/create_article' />
          <Users path="/users"/>
          <User user={this.state.user} path="/users/:username"/>
          <Errors default />
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

componentDidUpdate(prevProps, prevState) {
  const { topics } = this.state;
  if (topics !== prevState.topics) {
    return this.fetchTopics();
  }
}
}

export default App;
