// Code YouTubeDebugger Component Here
import React from "react";
class YouTubeDebugger extends React.Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p",
      },
    },
  };
  updateBit = () => {
    this.setState(
      (prev) => {
        return {
          settings: {
            ...prev.settings,
            bitrate: 12,
          },
        };
      },
      () => console.log(this.state.settings)
    );
  };

  updateRes = () => {
      this.setState(prev => {
          return {
              settings: {
                  ...prev.settings,
                  video: {
                      resolution: "720p",
                  }
              }
          }
      }, () => console.log(this.state.settings.video.resolution)
      )
  }

  render() {
    return (
      <div>
        <button className={"bitrate"} onClick={this.updateBit}>
          {" "}
          Change Bitrate{" "}
        </button>
        <button className={"resolution"} onClick={this.updateRes}>
          {" "}
          Change Resolution{" "}
        </button>
      </div>
    );
  }
}
export default YouTubeDebugger;
