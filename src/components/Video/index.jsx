import React from 'react'


//https://www.youtube.com/watch?v=vlm5tgistqA&t=2092s
//https://youtu.be/vlm5tgistqA
class Video extends React.Component {
    // videoOnReady(event) {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo();
    // }
    render() {

        let youtube = {
            width: "100%",
            height: "400",
            id: "vlm5tgistqA",
            frameborder: "0"
        }

        return (
            <iframe width={youtube.width} height={youtube.height}
                src={"https://www.youtube.com/embed/" + youtube.id}
                frameBorder={youtube.frameborder} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        );
    }
}

export default Video;