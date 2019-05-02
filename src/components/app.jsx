import React, { Component } from 'react';
// import giphy-api from 'giphy-api';

import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';

const GIPHY_API_KEY = 'Dzke4GhKWMohfCD7uv0Sni0nvhbRn500';
const giphy = require('giphy-api')(GIPHY_API_KEY);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [
        "13M4Ki3u5orBe0",
        "iU7QUbHXVsS2s",
        "6WdfqTu3GkQ6s"
      ]
    }
  }

  giphySearch = (term) => {
    giphy.search({
      q: term,
      rating: 'g',
      limit: 3
    }, (error, result) => {
      let gifs = result.data.map((gif) => {return gif.id});
      this.setState({gifs: gifs});
      console.log(this.state.gifs);
    })
  }

  render(){
    return (
      <div>
        <div className="left-scene">
          <SearchBar giphySearch={this.giphySearch} />
          <Gif id="FvWqHJarQ07x6"/>
        </div>
        <div className="right-scene">
          <div><GifList gifs={this.state.gifs} /></div>
        </div>
      </div>
    )
  }
}

export default App;
