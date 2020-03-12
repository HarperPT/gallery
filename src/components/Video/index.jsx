import React from 'react'
import YouTube from 'react-youtube';


//https://www.youtube.com/watch?v=vlm5tgistqA&t=2092s
//https://youtu.be/vlm5tgistqA
class Video extends React.Component {
    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const { videoId } = this.props
        const opts = {
            // height: '100%',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: -1
            }
        };
        return (
            <React.Fragment>
                <YouTube
                    videoId={videoId}
                    opts={opts}
                    onReady={this.videoOnReady}
                />
            </React.Fragment>
        );
    }
}

export default Video;