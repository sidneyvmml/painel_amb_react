import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { closeEsqueciSenha, sendPasswordResetEmail } from '../modalsActions'
import If from '../../utils/if'
import EsqueciSenhaForm from './esqueciSenhaForm'

class EsqueciSenhaModal extends Component {

    handleSubmit(values){
        this.props.sendPasswordResetEmail(values.email)
    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={() => this.props.closeEsqueciSenha()}>
                <Modal.Header closeButton>
                    <Modal.Title>Recuperar Senha</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Nós podemos enviar um email de redifinição de senha. Informe seu endereço de email.</p>        
                    <EsqueciSenhaForm onSubmit={this.handleSubmit.bind(this)} />        
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-block btn-flat" onClick={() => this.props.closeEsqueciSenha()}>Fechar</button>      
                </Modal.Footer>
            </Modal>
        );
    }
}
const mapStateToProps = state => ({ showModal: state.modals.esqueciSenha })
const mapDispathToProps = dispath => bindActionCreators({ closeEsqueciSenha, sendPasswordResetEmail }, dispath)
export default connect(mapStateToProps, mapDispathToProps)(EsqueciSenhaModal)