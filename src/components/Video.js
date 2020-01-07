import React, { Component, Fragment } from 'react'
import ReactPlayer from 'react-player';
import video from '../images/Analisis de contenido.mp4'


class Video extends Component {


    render() {
        return (
             <Fragment>
                 <div className="container">
                <ReactPlayer url={video} loop={true} playing={true} playbackRate={2} controls={true} width='50%' height='100%' />
                </div>
             </Fragment>         

        )
    }
}

export default Video