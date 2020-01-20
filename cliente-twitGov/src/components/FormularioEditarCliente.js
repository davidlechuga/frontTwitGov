import React, { Component, Fragment } from 'react';
import { ACTUALIZAR_CLIENTE } from '../mutations';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

class CrearCliente extends Component {

    state = {
        error: false,
        cliente: this.props.cliente
    }
    


    render() {

        const { error } = this.state
        let respuesta = (error) ? <p className="alert alert-danger p-3 text-center"> Todos los campos Son Obligatorios</p> : '';
        // Destructuring al state , una vez tranfiriendo los props .
        const { nombre, apellidos, email, job, project } = this.state.cliente
        
    return (
        <Fragment>
            <h1> Web Development Services </h1>
            {respuesta}
            <Mutation
                mutation={ACTUALIZAR_CLIENTE}
                //vista mas freca cuando realizamos cambios con refetch.
                onCompleted={() => this.props.refetch()
                    .then(() => {
                    this.props.history.push('/usuarios')
                })}
            >
                {actualizarCliente => (
                    <form
                        //crearCliente (schema.graphql) es una funcion
                        //que recibe un INPUT (los de aqui) segun ciertos requerimentos de ClienteInput(shcema.grapqhph)
                        // y devuelve un cliente 
                        className="col-8"
                        onSubmit={e => {
                        e.preventDefault();

                        const { id, nombre, apellidos, email, job, project } = this.state.cliente
                        // validar el error =  this.state.error
                        if (nombre === '' || apellidos === '' || email === '' || job === '' || project === '') {
                            this.setState({
                                error: true
                            })
                            return;
                        };
                        // cuando la validacion del form es correcta segun validacion cambia estado
                        this.setState({
                            error : false
                        })
                        
                        const input = {
                            id,
                            nombre,
                            apellidos,
                            email,
                            job,
                            project
                        }
                            
                        actualizarCliente({
                            variables: {input}
                        })
                        
                        }}
                    >
                
                    <div className="form-group">
                        <label> Frist Name  </label>
                            <input
                                className="form-control"
                                type="text"
                                autoComplete="off"
                                name="nombre"
                                defaultValue={nombre}
                                onChange={e => {
                                this.setState({
                                    cliente: {
                                        ...this.state.cliente,
                                        nombre: e.target.value
                                        }
                                    })
                                }}
                            />
                    </div>
                    
                    <div className="form-group">
                        <label> Last Name  </label>
                            <input
                                className="form-control"
                                type="text"
                                autoComplete="off"
                                name="apellidos"
                                defaultValue={apellidos}
                                onChange={e => {
                                this.setState({
                                    cliente: {
                                        ...this.state.cliente,
                                        apellidos: e.target.value
                                        }
                                    })
                                }}
                            />
                    </div>
                        
                    <div className="form-group">
                        <label> Email  </label>
                            <input
                                className="form-control"
                                type="email"
                                autoComplete="off"
                                name="email"
                                defaultValue={email}
                                onChange={e => {
                                this.setState({
                                    cliente: {
                                        ...this.state.cliente,
                                        email: e.target.value
                                    }
                                    })
                                }}
                            />
                    </div>
                    <div className="form-group">
                        <label> job  </label>
                            <input
                                className="form-control"
                                type="text"
                                autoComplete="off"
                                name="job"
                                defaultValue={job}
                                onChange={e => {
                                this.setState({
                                    cliente: {
                                        ...this.state.cliente,
                                        job: e.target.value
                                    }
                                    })
                                }}
                            />
                    </div>
                    <div className="form-group">
                        <label> Project </label>
                            <input
                                className="form-control"
                                type="text"
                                autoComplete="off"
                                name="project"
                                defaultValue={project}
                                onChange={e => {
                                this.setState({
                                    cliente: {
                                        ...this.state.cliente,
                                        project: e.target.value
                                    }
                                    })
                                }}
                            />
                    </div>
                        
                    
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.handleClick}
                        > Guardar Cambios
                    </button>    
                    </form>  
                )}
            </Mutation>
        </Fragment>
        )
        }
    }

export default withRouter (CrearCliente)