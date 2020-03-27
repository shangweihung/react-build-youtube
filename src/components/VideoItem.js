import React from 'react';

const VideoItem = ( { video, videoSelect } ) => {
  return (
    <div className="video-item"
         onClick={() => videoSelect(video)}>
      <div className="ui small image">
        <img src={video.snippet.thumbnails.medium.url}
             alt={video.snippet.description}/>
      </div>
      <div className="middle aligned content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
