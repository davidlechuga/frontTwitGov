import React, { Component, Fragment } from 'react'
import { CLIENTE_QUERY } from '../queries';
import { Query } from 'react-apollo';
import FormularioEditarCliente from '../components/FormularioEditarCliente'

class EditarCliente extends Component {

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

        // tomar ID del contacto a editar
        const { id } = this.props.match.params;
        console.log(id);
        
        return (
            <Fragment>
                <h1>
                    El Cliente Sera Editado
                </h1>
                {respuesta}
                <Query
                    query={CLIENTE_QUERY}
                    variables={{ id }}
                    >
                    {({ loading, error, data, refetch }) => {
                        if (loading) return 'cargando...';
                        if (error) return `Error! ${error.message}`;
                        console.log(data);
                        return (
                            <FormularioEditarCliente
                                cliente={data.getCliente}
                                refetch={refetch}
                            />
                        )
                    }}
                </Query>
            </Fragment>
        )
    }
}

export default EditarCliente