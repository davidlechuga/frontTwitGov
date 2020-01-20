import React, { Component, Fragment } from 'react'
import './styles/CrearCliente.css'
import { Mutation } from 'react-apollo';
import { NUEVO_CLIENTE } from '../mutations';;


class CrearCliente extends Component {

    state = {
        cliente: {
            nombre: '',
            apellidos: '',
            email: '',
            job: '',
            project:'',
        },
        error: false
    }
    


    render() {

        const { error } = this.state
        let respuesta = (error) ? <p className="alert alert-danger p-3 text-center"> Todos los campos Son Obligatorios</p> : '';
    return (
        <Fragment>
            <h1> Web Development Services </h1>
            {respuesta}
            <Mutation
                mutation={NUEVO_CLIENTE}
                onCompleted={ () => this.props.history.push('/usuarios')}
            >
                {crearCliente => (
                <form
                    //crearCliente (schema.graphql) es una funcion
                    //que recibe un INPUT (los de aqui) segun ciertos requerimentos de ClienteInput(shcema.grapqhph)
                    // y devuelve un cliente 
           className="col-8"
                onSubmit={e => {
                    e.preventDefault();
                    const { nombre, apellidos, email, job, project } = this.state.cliente
                    
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
                        nombre,
                        apellidos,
                        email,
                        job,
                        project
                    }
                    // console.log(input);
                    crearCliente({ 
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
                            onChange={e => {
                            this.setState({
                                cliente: {
                                    ...this.state.cliente,
                                    nombre: e.target.value
                                    }
                                })
                            }}

                        // value lo convierte de no controlados a controlados
                        />
                </div>
                    
                <div className="form-group">
                    <label> Last Name  </label>
                        <input
                            className="form-control"
                            type="text"
                            autoComplete="off"
                            name="apellidos"
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
                    > Agregar Usuario
                </button>    

                </form>  
                )}
            </Mutation>
        </Fragment>
        )
        }
    }

export default CrearCliente