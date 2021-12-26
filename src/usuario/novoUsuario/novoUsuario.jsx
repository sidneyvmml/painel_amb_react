import React, { Component } from 'react'
import NovoUsuarioForm from './novoUsuarioForm'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { create } from '../usuarioActions'
import Messages from '../../common/msg/messages'
import { getBairros } from '../../dados/dadosActions'


class NovoUsuario extends Component {

    login(){
        window.location = "#login"
    }

    componentWillMount(){
        this.props.getBairros()
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <div className="content">
                        <button type="button" className="btn btn-warning align-right" onClick={this.login}>Login</button>                       
                    </div>
                </div>

                <NovoUsuarioForm onSubmit={this.props.create}/>

                <Messages />
            </div>
        );
    }
}

const mapDispathToProps = dispath => bindActionCreators({ create, getBairros }, dispath)
export default connect(null, mapDispathToProps) (NovoUsuario)