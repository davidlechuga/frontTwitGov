import React, { Component, Fragment } from 'react'
import {Link } from 'react-router-dom'

class Badgeform extends Component {

    state = {
        cliente: {
            firstName: 'David',
            lastName: '',
            email: '',
            jobTitle: '',
            project:''
            

        }
    }
    
   

    handleClick = e => {
    console.log("button was click");

    }
    handleSubmit = e => {
    e.preventDefault();

    console.log(" I have already sent the form.");

    }


    render() {
    return (
        <Fragment>
            <h1> Web Development Services </h1>
            
            <form onSubmit={this.handleSubmit}>
                
                <div className="form-group">
                    <label> Frist Name  </label>
                        <input
                            className="form-control"
                            type="text"
                            name="firstName"
                            onChange={this.props.onChange}
                            value={this.props.formValues.firstName}
                        // value lo convierte de no controlados a controlados
                        />
                </div>
                    
                <div className="form-group">
                    <label> Last Name  </label>
                        <input
                            className="form-control"
                            type="text"
                            name="lastName"
                            onChange={this.props.onChange}
                            value={this.props.formValues.lastName}
                        />
                </div>
                    
                <div className="form-group">
                    <label> Email  </label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.props.onChange}
                            value={this.props.formValues.email}     
                        />
                </div>
                <div className="form-group">
                    <label> JobTitle  </label>
                        <input
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            onChange={this.props.onChange}
                            value={this.props.formValues.jobTitle}
                        />
                </div>
                <div className="form-group">
                    <label> Project </label>
                        <input
                            className="form-control"
                            type="text"
                            name="project"
                            onChange={this.props.onChange}
                            value={this.props.formValues.project}
                        />
                </div>
                    
                <div style={{textAlign:"center"}}>
                <Link to={"/crear/usuario"}>
                    <button 
                        type="submit"
                        className="btn btn-primary "
                        onClick={this.handleClick}
                    > Crea un Nuevo Usuario
                    </button>    
                </Link>
                </div>
            </form>  
        </Fragment>
        )
        }
    }

export default Badgeform