import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

import LyricCreate from '../components/LyricCreate';
import LyricList from '../components/LyricList';

import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const {song} = this.props.data;

    if (!song) { return <div>Loading data...</div>; }
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricList songLyrics={song.lyrics} />
        <LyricCreate songId={this.props.params.id}/>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => {return {variables: {id: props.params.id}}}
})(SongDetail);