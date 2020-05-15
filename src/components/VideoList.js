import React from 'react';
import VideoListEntry from './VideoListEntry.js';
import changeVideo from './../actions/currentVideo.js';
import { connect } from 'react-redux';

var VideoList = ({videoList, handleVideoListEntryTitleClick}) => {
  { console.log('step 5 VideoList.js: ', videoList, handleVideoListEntryTitleClick); }
  return (
    <div className="video-list">
      {
        videoList.map(video => (
          <VideoListEntry
            key={video.etag}
            video={video}
            handleVideoListEntryTitleClick={handleVideoListEntryTitleClick(video)}
          />
        ))
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videoList: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (video) => {
      dispatch(changeVideo(video));
    }
  };
};

VideoList.propTypes = {
  videoList: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
