import React, { Component } from 'react'
import './navBar.css'
import { connect } from 'react-redux'
import { logout } from '../../auth/authActions'

class NavBar extends Component {
    render() {
        return (
            <nav className='navbar navbar-custom'>
                <div className='container'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' onClick={() => false}>
                            <i className='fa fa-address-card'></i> Receituário Web - Pestalozzi
                        </a>
                    </div>

                    <div id='navbar' className='navbar-collapse collapse'>
                        <ul className="nav navbar-nav">
                            <li><a href='#/atendimento'>Atendimento</a></li>
                            <li><a href='#/painel'>Painel</a></li>
                            {/*<li><a href='#/editar-perfil'>Editar Perfil</a></li>*/}
                            <li><a href='#' onClick={this.props.logout}>Sair</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default connect(null, { logout })(NavBar)