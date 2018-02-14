import React, {Component} from 'react';
import {graphql} from 'react-apollo';

import addLyricMutation from '../queries/addLyricMutation';

class LyricCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {content: ''};
    this.lyricSubmit = this.lyricSubmit.bind(this)
  }

  lyricSubmit(e) {
    e.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({content: ''}));
  }

  render() {
    return (
      <form
        onSubmit={this.lyricSubmit}
      >
        <label>Add Lyrics</label>
        <input
          value={this.state.content}
          onChange={(e) => this.setState({content: e.target.value})}
        />
      </form>
    );
  }
}

export default graphql(addLyricMutation)(LyricCreate);