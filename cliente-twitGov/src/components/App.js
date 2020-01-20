import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//LAYOUTS
import Layout from './Layout'
//PAGES
import BadgeNew from '../pages/badgeNew';
import Badges from '../pages/badges';
import Clientes from '../pages/clientes';
import CrearCliente from '../pages/CrearCliente'
//COMPONENTES
import EditarCliente from '../components/EditarCliente'

//APOLLO CONFIG
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
const client = new ApolloClient({
    uri: "http://localhost:4004/graphql",
    cache: new InMemoryCache({
        addTypename:false
    }),
    onError: ({ networkError, graphQLErrors }) => {
        console.log('graphQLErrors', graphQLErrors);
        console.log('networkError', networkError);
    }
});

function App() {
    
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={BadgeNew} />
                        <Route exact path="/intereses" component={Badges} />
                        <Route exact path="/usuarios" component={Clientes} />
                        <Route exact path="/usuarios/editar/:id" component={EditarCliente} />
                        <Route exact path="/crear/usuario" component={CrearCliente} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App