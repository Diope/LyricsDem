import React, {Component} from 'react';
import {graphql} from 'react-apollo';

import likeLyricMutation from '../queries/likeLyricMutation'

class LyricList extends Component {

  likeLyric(id, likes) {

    this.props.mutate({
      variables: {id: id},
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    });
  }

  renderLyrics() {
    return this.props.songLyrics.map(({id, content, likes}) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <div className="voting-box">
            <i className="material-icons"
                onClick={() => this.likeLyric(id, likes)}
              >thumb_up</i>
              {likes}
          </div>
        </li>
      )
    })
  }

  render(){
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default graphql(likeLyricMutation)(LyricList);