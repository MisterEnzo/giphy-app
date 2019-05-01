import React, { Component } from 'react';

import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';


class App extends Component {
  render(){
    const gifs = [
      "13M4Ki3u5orBe0",
      "iU7QUbHXVsS2s",
      "6WdfqTu3GkQ6s"
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <Gif id="FvWqHJarQ07x6"/>
        </div>
        <div className="right-scene">
          <div><GifList gifs={gifs} /></div>
        </div>
      </div>
    )
  }
}

export default App;
