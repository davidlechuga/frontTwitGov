import React, {Fragment} from 'react';

import './styles/Badge.css';
import twitgov_logo  from '../images/twitgov_logo.png';
import david_photo from '../images/david_photo.png'

class Badge extends React.Component {

  render() {
      
      return ( 
      <Fragment>
      <div className="Badge">
        <div className="Badge__header">
          <img src={twitgov_logo} alt="Logo de la conferencia" className="twitgov_logo" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={david_photo}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3> {this.props.jobTitle} </h3>
          <h5> {this.props.email} </h5>
        </div>

        <div className="Badge__footer"> {this.props.project} </div>
      
        </div>
        
      </Fragment>
    );
  }
}

export default Badge;
