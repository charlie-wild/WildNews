import React, { Component, Fragment } from "react";
import { Link, navigate } from "@reach/router";
import Loader from 'react-loader-spinner'
import Votes from "./Votes";
import moment from "moment";
import * as api from "./api";
import "./articles.css";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    page: 1
  };
  render() {
    const { articles, page, isLoading } = this.state;
    const { topic } = this.props;
    if (articles.length === 0 && !isLoading)
      return (
        <h2 className="empty_topic">
          There are no articles! Create one{" "}
          <Link to="/create_article">here</Link>
        </h2>
      );
    return (
      <div>
        {topic && <h2>{topic}</h2>}
        <ul>
          {isLoading && <Loader
            type="Puff"
            color="#00BFFF"
            height="100"
            width="100"
          />}
          {articles.map(article => {
            return (
              <Fragment key={article.article_id}>
                <article className="single_article">
                  <li className="single_article_title">
                    <Link to={`/articles/${article.article_id}`}>
                      {article.title}
                    </Link>
                  </li>
                  <Votes
                    article_id={article.article_id}
                    votes={article.votes}
                  />
                  <span>Created by:{article.username}</span>
                  <span>
                    Created:{" "}
                    {moment(article.created_at).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </span>
                </article>
              </Fragment>
            );
          })}
          <br />
          {page > 1 && (
            <button
              className="button is-primary is-small page_button"
              onClick={this.pageDown}
            >
              Previous Page
            </button>
          )}
          {articles.length === 10 && (
            <button
              className="button is-primary is-small page_button"
              onClick={this.pageUp}
            >
              Next Page
            </button>
          )}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.state.page > 1
      ? this.pagginate()
      : this.fetchArticles(this.props.topic);
  }

  fetchArticles = () => {
    api
      .getArticles(this.props.topic)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(err => {
        navigate("/404", { replace: true });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (topic !== prevProps.topic && this.state.articles.length !== 0) {
      return this.fetchArticles();
    }
  }

  pagginate = () => {
    api
      .changePage(this.state.page, this.props.topic)
      .then(articles => this.setState({ articles }));
  };

  pageDown = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.pagginate();
    });
  };

  pageUp = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.pagginate();
    });
  };
}

export default Articles;
