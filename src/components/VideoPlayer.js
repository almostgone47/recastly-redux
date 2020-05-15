import React from 'react';
import { connect } from 'react-redux';

var VideoPlayer = ({currentVideo}) => {
  console.log('step 4 VideoPlayer.js: ', currentVideo);
  return (
    !currentVideo
      ? <div className="video-player">Please wait...</div>
      : <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{currentVideo.snippet.title}</h3>
          <div>{currentVideo.snippet.description}</div>
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
  };
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  currentVideo: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
