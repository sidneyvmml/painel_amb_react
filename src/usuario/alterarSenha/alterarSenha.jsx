import React, { Component } from 'react';

import Content from '../../common/template/content'
import ContentHeader from '../../common/template/contentHeader'
import AlterarSenhaForm from './alterarSenhaForm'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { alterarSenha } from '../usuarioActions'

class AlterarSenha extends Component {
    
    render() {
        return (
            <div className='fixed-height'>
                <ContentHeader title="Usuário" small="Alterar Senha"/>
                <Content>
                    <AlterarSenhaForm onSubmit={this.props.alterarSenha} />
                </Content>
            </div>
        );
    }
}
const mapDispathToProps = dispath => bindActionCreators({ alterarSenha }, dispath)
export default connect(null, mapDispathToProps)(AlterarSenha);