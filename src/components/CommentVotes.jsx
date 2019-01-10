import React, { Component } from 'react';
import * as api from './api'

class CommentVotes extends Component {
   state = {
    voteChange: 0,
  }
  
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    console.log(voteChange)
    return (
      <div>
        <button onClick={() => this.voteComment(1)} disabled={voteChange===1}>Up</button>
        Votes: { votes + voteChange }
        <button onClick={() => this.voteComment(-1)} disabled={voteChange===-1}>Down</button>        
      </div>
    );
  }

  voteComment = (increment) => {
    const { article_id, comment_id } = this.props;
    api.voteComment(article_id, comment_id, increment).catch(err => {
      console.log(err)
      this.setState(state => ({ voteChange: state.voteChange - increment }))
    })
    this.setState(state => ({ voteChange: state.voteChange + increment}))
  }
}

export default CommentVotes;