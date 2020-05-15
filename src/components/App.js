import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import { connect } from 'react-redux';

const App = () => {
  // this.getYouTubeVideos = this.getYouTubeVideos.bind

  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  { console.log('step 2 App.js: '); }
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer />
        </div>
        <div className="col-md-5">
          <VideoList />
        </div>
      </div>
    </div>
  );
};

const matStateToProps = (state) => {
  return {};
};

export default connect(matStateToProps, null)(App);