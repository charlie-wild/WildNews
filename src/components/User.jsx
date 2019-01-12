import React, { Fragment, Component } from 'react';
import { Link } from '@reach/router';
import * as api from './api'
import './user.css';

class User extends Component {
  state = {
    userPageInfo: {},
    userArticles: [],
    userComments: []
  }
  render() {
      const { userPageInfo, userArticles, userComments } = this.state;
    return (
      <div>
      {userPageInfo === {} ? <p>This user does not exist!</p> :
      <Fragment>
        <h2>{userPageInfo.username}</h2>
        <img className='user_avatar'  src={userPageInfo.avatar_url} alt="user avatar"/>
        <p className='subtitle is-two'>New User Articles</p>
        <ul>
          { userArticles.map(article => {
            return<li key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>{article.title}</Link></li>
          })}
        </ul>
        <ul>
        <p className='subtitle is-three'>Latest User Comments</p>
         { userComments.map(comment => {
            return<li key={comment.comment_id}>{comment.body}</li>
          })}
        </ul>
            </Fragment>
      };
      </div>
      
    );
  }
  
  componentDidMount() {
    this.fetchUser(this.props.username)
    this.fetchUserArticles();
    this.fetchUserComments();
  }

  fetchUser = () => {
    api.getUser(this.props.username).then((user) => {
      this.setState({userPageInfo: user})
    })
  }

  fetchUserArticles = () => {
    api.getArticles().then((articles) => {
      this.setState({userArticles: articles.filter(article => {
       return article.username === this.props.username;
      })})
    })
  }

  fetchUserComments = () => {
    api.getComments().then((comments) => {
      this.setState({userComments: comments.filter(comment => {
        return comment.author === this.props.username;
      })})
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      username
    } = this.props
    if (username !== prevProps.username) {
      return this.fetchUser(username)
    }
  }
}

export default User;