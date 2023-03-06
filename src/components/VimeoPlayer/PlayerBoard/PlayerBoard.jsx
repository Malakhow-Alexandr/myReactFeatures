import { Component } from 'react';
import { VideoLIst } from '../VideoList/VideoList';
import { Player } from '../Player/Player';
import videos from '../../../videos.json';

export class VimeoBoard extends Component {
  state = {
    selectedVideo: null,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };
  render() {
    return (
      <div style={{ padding: 24 }}>
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoLIst videos={videos} onSelect={this.selectVideo}></VideoLIst>
        <Player url={this.state.selectedVideo} />
      </div>
    );
  }
}
