import React from 'react';

const Gif = (props) => {
  return (
    <div>
      <img src={`https://media2.giphy.com/media/${props.id}/200.gif`} />
    </div>
  )
}

export default Gif;
