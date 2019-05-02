import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  search = (searchTerm) => {
    this.setState({searchTerm});
    console.log(this.props.giphySearch(this.state.searchTerm));;
  }

  render() {
    return (
      <input type="text"
       value={this.state.searchTerm}
       onChange={event => this.search(event.target.value)}
      />
    )
  }
}

export default SearchBar;
