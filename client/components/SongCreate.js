import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import {Link, hashHistory} from 'react-router';

class SongCreate extends Component {
  constructor(props){
    super(props);

    this.submitHander = this.submitHander.bind(this)

    this.state = {title: ""}
  }

  submitHander(e) {
    e.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title
      }
    }).then(() => hashHistory.push('/'))
  }

  render () {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.submitHander}>
          <label>Song Title:</label>
          <input 
            onChange={(e) => this.setState({title: e.target.value})}
            value={this.state.title} 
          />
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title ) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);