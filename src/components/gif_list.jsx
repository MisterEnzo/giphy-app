import React from 'react';

import Gif from './gif';

const GifList = (props) => {
  return(
    props.gifs.map(gif => {
      return <Gif id={gif} key={gif} />;
    })
  )
}


export default GifList;
