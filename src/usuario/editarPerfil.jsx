import React, { Component } from 'react';
import Messages from '../common/msg/messages'
import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import EditarPefilForm from './editarPerfilForm'
import { update, init } from './usuarioActions'

class EditarPerfil extends Component {

    componentWillMount() {
        this.props.init(this.props.user)
    }
    render() {
        return (
            <div>
                <ContentHeader title="Editar" small="Perfil" />
                <Content>
                    <EditarPefilForm onSubmit={this.props.update} />
                </Content>
                <Messages />
            </div>
        );
    }
}

const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps, { update, init })(EditarPerfil);