import React, { Component, Fragment } from 'react'
import ReactPlayer from 'react-player';
import video from '../images/Analisis de contenido.mp4'


class Video extends Component {


    render() {
        const margen = {
        marginTop: "50px"
                       }
        return (
             <Fragment>
                <div className="container" style={margen} >
                    <div className="row">
                        <div className="col-12 video">
                          <ReactPlayer url={video} loop={true} playing={true} playbackRate={2} controls={true} />
                        </div>                    
                    </div>
                </div>
             </Fragment>         

        )
    }
}

export default Video