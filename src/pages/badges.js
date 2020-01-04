import React, { Component,Fragment } from 'react'
import Navbar from '../components/Navbar'
import './styles/Badges.css'

import BadgesList from '../components/BadgeList'
import DB from '../data.json'
//import useInitialState from '../hooks/useInitialState';
//const API = ' `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`'


class Badges extends Component {

    state = {
        datos: [DB.datos]
    }
    

    render() {
        return (
            <Fragment>

                <Navbar
                
                />

                <div className="Badges">
                    <div className="Badges__heroo">
                        <div className="Badges__container">
                            <h1 className="title_one">  TwitGov  Dentro Del Gobierno </h1>
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <a href="/badges/new" className="btn btn-primary"> NEW BADGE</a>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgesList datos={this.state.datos} />
                    </div>
                 </div>

            </Fragment>
        )
    }
}

export default Badges