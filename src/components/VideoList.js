import React from 'react';
import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videos, videoListHandler}) => (
  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          videoListHandler={videoListHandler}
        />
      ))
    }
  </div>
);

// VideoList.propTypes = {
//   videos: React.PropTypes.array.isRequired
// };

export default VideoList;
