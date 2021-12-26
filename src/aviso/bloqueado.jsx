import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../auth/authActions'

class BloqueadoPage extends Component {

    render() {
        return (
            <div>
                <div className="centerHorizontal">
                    Usuário bloqueado. Entrar em contato no email richardsonogueira@gmail.com ou WhatsApp 99613-7612 para ativar seu usuário.
                </div>
                <div className="center">
                    <button onClick={this.props.logout} className="btn btn-link">
                        Sair
                    </button>
                </div>
            </div>
        );
    }
}

const mapDispathToProps = dispath => bindActionCreators({ logout }, dispath)
export default connect(null, mapDispathToProps)(BloqueadoPage)