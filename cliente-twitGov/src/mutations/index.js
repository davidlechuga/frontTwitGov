import gql from 'graphql-tag'

export const NUEVO_CLIENTE = gql`

mutation crearCliente($input: Clienteinput)  {
  crearCliente(input: $input) {
    id
    nombre
    apellidos
    email
    job
    project
  }
}`;


export const ACTUALIZAR_CLIENTE = gql`

mutation actualizarCliente($input: Clienteinput ){
  actualizarCliente(input: $input){
    id
    nombre
    apellidos
    email
    job
    project
  }
}`;


export const ELIMINAR_CLIENTE = gql`
  
  mutation eliminarCliente ($id: ID!){
  eliminarCliente(id:$id) 
}`;

