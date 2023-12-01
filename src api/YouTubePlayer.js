import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      origin: 'https://www.youtube.com/',
      key: 'AIzaSyDlq9iPuktUnj6w8rKylrOjmnMETPcYAWI',
    },
  };

  const videoIds = [
    'J7JKwGq4z6M',
    'LO4Nx1-TDi0', 
    'dSCoB6b3t1o', 
  ];

  const onReady = (event) => {
    
  };

  return (
    <div className='api'>
      {videoIds.map((videoId, index) => (
        <YouTube
          key={index}
          videoId={videoId}
          opts={opts}
          onReady={onReady}
        />
      ))}
    </div>
  );
};

export default YoutubePlayer;
