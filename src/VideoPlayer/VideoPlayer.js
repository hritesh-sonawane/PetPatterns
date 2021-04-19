import React from "react";
import { Video } from "../VideoPlayer/Video";
import { Menu } from "../VideoPlayer/Menu";

const VIDEOS = {
  fast: "https://www.youtube.com",
  slow: "https://www.youtube.com",
  cute: "https://www.youtube.com",
  eek: "https://www.youtube.com",
};

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.chooseVideo = this.chooseVideo.bind(this);

    this.state = { src: VIDEOS.fast };
  }

  chooseVideo(newVideo) {
    this.setState({
      src: VIDEOS[newVideo],
    });
  }

  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu chooseVideo={this.chooseVideo} />
        <Video src={this.state.src} />
      </div>
    );
  }
}

export default VideoPlayer;
