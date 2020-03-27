import React from 'react';
import VideoItem from './VideoItem.js';

const VideoSidebar = ( { videos, videoSelect } ) => {

  const renderList = videos.map(video => {
    return <VideoItem video={video}
                      key={video.id.videoId}
                      videoSelect={videoSelect} />;
  });

  return (
    <div className="ui segment">
      <div className="ui divided items ui middle aligned animated list">
        {renderList}
      </div>
    </div>
  );
}


export default VideoSidebar;
