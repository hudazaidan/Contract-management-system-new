// src/YouTubeEmbed.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTubePlayer from './YouTubePlayer';

const YouTubeEmbed = () => {
  const [videoId, setVideoId] = useState('PL0ejmTCeG9lHrGtsRHcvJyjKWSan2zyt4&index=2');

  useEffect(() => {
    const loadVideo = (iframe, videoNumber) => {
      const cid = "UC9A9xG0xCNhdeasNBaQ59HQ";
      const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`);
      const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

      axios.get(reqURL)
        .then(response => {
          const link = response.data.items[videoNumber].link;
          const id = link.substr(link.indexOf("=") + 1);
          setVideoId(id);
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    const iframes = document.getElementsByClassName('latestVideoEmbed');
    for (let i = 0, len = iframes.length; i < len; i++) {
      loadVideo(iframes[i], i);
    }
  }, []);

  return (
    <div className='api'>
      <YouTubePlayer videoId={videoId} />
    
    </div>
  );
};

export default YouTubeEmbed;
