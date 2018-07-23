import React, { Component } from 'react';
import VideoPage from './components/videoPage';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Video extends Component {
  static displayName = 'Video';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="video-page">
        <Header />
        <VideoPage />
        <Footer />
      </div>
    );
  }
}
