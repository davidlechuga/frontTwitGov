import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom"
import {
  BrowserRouter as Router,
} from "react-router-dom";

import './styles/Navbar.css'
import '../pages/styles/BadgeNew.css'


import twitgov_logo from '../images/twitgov_logo.png';




class Navbar extends Component {



    render() {
        

        return (
            <Fragment>
                <Router>

                <div className="Navbar">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link className="navbar-brand"  to={"/"} > Navbar</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={"/hola"}>Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/asios"}>Link</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled" to={"/"}>Disabled</Link>
                                </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>

                  <div className="BadgeNew__hero">
                    <img src={twitgov_logo} alt="logo" className="Navbar__brand-logo" />
                        <span className="font-weight-light"> Twit </span>
                        <span className="font-weight-bold"> Gov </span>
                 </div>
 
            </Router>
            </Fragment>
        )
    }
}
export default Navbar