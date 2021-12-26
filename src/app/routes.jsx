import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import AuthOrApp from './AuthOrApp'
import EditarPerfil from '../usuario/editarPerfil'
import Painel from '../painel/painel'
import Atendimento from '../atendimento/atendimento'

class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/painel' component={Painel} />

                <Route path='/' component={AuthOrApp}>
                    <IndexRoute component={Atendimento} />
                    <Route path='/editar-perfil' component={EditarPerfil} />
                    <Route path='/atendimento' component={Atendimento} />
                </Route>
                <Redirect from='*' to='/' />
            </Router>
        )
    }
}

export default Routes