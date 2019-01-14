import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
import "./App.css";
import * as api from "./components/api";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Article from "./components/Article";
import User from "./components/User";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import AddTopic from "./components/AddTopic";
import AddArticle from "./components/AddArticle";
import Users from "./components/Users";
import Errors from "./components/Errors";
import Topics from "./components/Topics";
import MobileOptions from "./components/MobileOptions";

class App extends Component {
  state = {
    user: {},
    topics: []
  };
  render() {
    const { topics, user } = this.state;
    return (
      <div className="App">
        <Header user={user} logout={this.logout} />
        <Auth user={user} login={this.login}>
          <Navbar topics={topics} user={user} logout={this.logout} />
          <Router className="content">
            <Topics topics={topics} path="/topics" />
            <Articles path="/" />
            <Articles user={user} topics={topics} path="/:topic" />
            <Article user={user} path="/articles/:article_id" />
            <AddTopic addTopic={this.addTopic} path="/create_topic" />
            <AddArticle
              user={user}
              topics={this.state.topics}
              path="/create_article"
            />
            <Users path="/users" />
            <User user={user} path="/users/:username" />
            <MobileOptions path="mobile_options" />
            <Errors default />
          </Router>
        </Auth>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
    if (localStorage.getItem("user") && !this.state.user.username) {
      this.setState({ user: JSON.parse(localStorage.getItem("user")) });
    }
  }

  login = user => {
    this.setState({
      user
    });
    localStorage.setItem("user", JSON.stringify(user));
  };

  logout = () => {
    this.setState({
      user: {}
    });
    localStorage.clear();
  };

  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };

  addTopic = topic => {
    this.setState(
      {
        topics: [...this.state.topics, topic]
      },
      () => navigate("/create_article")
    );
  };
}

export default App;
