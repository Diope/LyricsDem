import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import query from '../queries/fetchSongs';
import mutation from '../queries/deleteSongs';

class SongList extends Component {
  deleteSong(id) {
    this.props.mutate({ variables: {id}})
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs.map(({id, title}) => {
      return (
        <li className="collection-item" key={id}>
          <Link to={`songs/${id}`}>
          {title}
          </Link>
          <i
            className="material-icons"
            onClick={() => this.deleteSong(id)}
          >
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) { return <div>Loading Data...</div>; }

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/create"
          className="btn-floating btn-large blue right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

export default graphql(mutation)(
  graphql(query)(SongList)
);