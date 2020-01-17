import gql from 'graphql-tag';


export const CLIENTES_QUERY = gql`

  query Clientes {
    getClientes{
      id
      nombre
      apellidos
      email
      project
      job
    }
  }
`;


export const CLIENTE_QUERY = gql`
 
  query Cliente($id:ID!) {
  getCliente (id:$id) {
    id
    nombre
    apellidos
    email
    job
    project
  }
}`;


