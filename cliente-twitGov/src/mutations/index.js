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

