import React from 'react';
import searchYouTube from '../lib/searchYouTube.js';
import handleVideoSearch from './../actions/search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import { connect } from 'react-redux';
import _ from 'lodash';

const Search = ({handleSearchInputChange}) => {
  { console.log('step 3 Search.js: ', handleSearchInputChange); }
  return (
    <div className="search-bar form-inline">
      <input
        className="form-control"
        type="text"
        onChange={(e) => handleSearchInputChange(e.target.value)}
      />
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSearchInputChange: (query) => {
      dispatch(handleVideoSearch(query));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
