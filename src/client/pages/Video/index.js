import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import req from '../../request';

import {
  VideoContainer,
  VideoContent,
} from './styles';

class Video extends Component {
  state = {
    status: 'ok',
  }

  componentWillMount() {
    const { pathname } = window.location;
    if (!/^[A-Za-z/0-9]{12,30}$/.test(pathname))
      return window.location.replace('/');
    req.addMovieMylist('history', pathname.substr(7));
  }
  render() {
    const { status } = this.state;
    const { pathname } = window.location;
    const movieId = pathname.substr(7);

    return (
      <VideoContainer>
        <VideoContent controls>
          <source src={`http://localhost:8888/api${window.location.pathname}`} type="video/mp4" />
          <track kind="captions" src={`/upload/${movieId}/en-${movieId}.vtt`} srcLang="eng" label="English" />
          <track kind="captions" src={`/upload/${movieId}/fr-${movieId}.vtt`} srcLang="my_lang" label="Other (my lang)" />
        </VideoContent>
      </VideoContainer>
    );
  }
}

export default Video;
