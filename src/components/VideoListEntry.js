import React from 'react';
import { connect } from 'react-redux';
import changeVideo from './../actions/currentVideo.js';

var VideoListEntry = ({currentVideo, handleVideoListEntryTitleClick}) => {
  { console.log('step 6 VideoListEntry.js: ', currentVideo, 'fx, ', handleVideoListEntryTitleClick); }
  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={currentVideo.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div
          className="video-list-entry-title"
          onClick={() => handleVideoListEntryTitleClick(currentVideo)}
        >
          {currentVideo.snippet.title}
        </div>
        <div className="video-list-entry-detail">{currentVideo.snippet.description}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentVideo: state.currentVideo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleVideoListEntryTitleClick: (video) => {
      dispatch(changeVideo(video));
    }
  };
};

VideoListEntry.propTypes = {
  currentVideo: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoListEntry);
