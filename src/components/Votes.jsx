import React, { Component } from 'react';
import * as api from './api'

class Votes extends Component {
 
  state = {
    voteChange: 0,
  }
  
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    
    return (
      <div>
        <button onClick={() => this.vote(1)} disabled={voteChange===1}>Up</button>
        Votes: { votes + voteChange }
        <button onClick={() => this.vote(-1)} disabled={voteChange===-1}>Down</button>        
      </div>
    );
  }

  vote = (increment) => {
    const { article_id } = this.props;    
    
    api.vote(article_id, increment).catch(err => {
      this.setState(state => ({ voteChange: state.voteChange - increment }))
    })
    this.setState(state => ({ voteChange: state.voteChange + increment}))
  }

  
}

export default Votes;