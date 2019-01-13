import React, { Component } from 'react';
import * as api from './api';
import './votes.css';

class Votes extends Component {
 
  state = {
    voteChange: 0,
  }
  
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    
    return (
      <div className='article_vote'>
       <button className='voteButton button is-danger button is-small' onClick={() => this.vote(-1)} disabled={voteChange===-1}>Down</button>  
        <strong>{ votes + voteChange }</strong>
        <button className='voteButton button is-success button is-small' onClick={() => this.vote(1)} disabled={voteChange===1}>Up</button>
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