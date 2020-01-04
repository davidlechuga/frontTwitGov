import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import video from '../images/Analisis de contenido.mp4'


class Video extends Component {


    render() {
        return (
             <div className='player-wrapper'>
                <ReactPlayer url={video} loop={true} playing={true} playbackRate={2} controls={true} />
            
            </div>            

        )
    }
}

export default Video