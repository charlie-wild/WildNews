import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import './topics.css';

const Topics = ({topics}) => {
  return (
    <div className='topics'>
      <h1>Topics</h1>
        { topics.map(topic => {
          return  <Fragment key={topic.slug}>
            <Link to={`/${topic.slug}`}> <h2>{topic.slug}</h2></Link>
              <p>{topic.description}</p>
          </Fragment>
        })}
    </div>
  );
};

export default Topics;