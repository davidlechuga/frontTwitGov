import React, {Fragment,Component} from 'react'
import { Query, Mutation } from 'react-apollo';
import { CLIENTES_QUERY } from '../queries';
import { ELIMINAR_CLIENTE } from '../mutations';
import { Link } from 'react-router-dom';

    class Clientes extends Component {
        render() {
            return (
                
                <Query query={CLIENTES_QUERY} pollInterval={1000}>
                    {({ loading, error, data, startPolling, stopPolling }) => {
                        if (loading) return "cargando";
                        if (error) return `Error: ${error.message}`;
                        console.log(data.getClientes);
                        return (
                            <Fragment>
                                <h1 className="mt-4"> Listado clientes </h1>
                                <ul className="list-group mt-4">
                                    {data.getClientes.map((item, index) => {
                                        const { id } = item;

                                        return (
                                            <li key={index} className="list-group-item">
                                                <div className="row justify-content-between align-items-center">
                                                    <div className="col-md-8 d-flex justify-content-between align-items-center ">
                                                        {item.nombre} -- {item.project}
                                                    </div>
                                                    <div className="col-md-4 d-flex justify-content-end">
                                                        <Link to={`/usuarios/editar/${item.id}`} className="btn btn-success d-block d-md-inline-block">
                                                            Editar Cliente
                                                        </Link>
                                                        <Mutation mutation={ELIMINAR_CLIENTE}>
                                                            {eliminarCliente => (
                                                                <button type="button" className="btn btn-danger d-block d-md-inline-block ml-2"
                                                                    onClick={() => {
                                                                        if (window.confirm('¿seguro que desea eliminar este cliente?')) {
                                                                            // console.log(item.id);
                                                                            eliminarCliente({
                                                                            //nosotros pusimo index en el map , en vez del id.
                                                                            variables: {id}
                                                                        })
                                                                        }
                                                                    }}
                                                                >
                                                                    &times; Eliminar
                                                            </button>
                                                            )}
                                                        </Mutation>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </Fragment>
                        );
                    }}
                </Query >
            );
        }
    }


    export default Clientes
