import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { closeConfirmacao, closeAndConfirm } from '../modalsActions'
import If from '../../utils/if'

class ConfirmacaoPrioridadeModal extends Component {

    render() {
        return (
            <Modal show={this.props.showModal} onHide={() => this.props.cancel()}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title || 'Confirmação'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{this.props.msg}</p>     
                    <button className="btn btn-block btn-flat btn-success" onClick={() => this.props.acao(false)}>Normal</button>    
                    <button className="btn btn-block btn-flat btn-danger" onClick={() => this.props.acao(true)}>Prioridade</button>    
                    <button className="btn btn-block btn-flat" onClick={() => this.props.cancel()}>Cancelar</button>        
                </Modal.Body>
            </Modal>
        );
    }
}
const mapStateToProps = state => ({ showModal: state.modals.confirmacao })
const mapDispathToProps = dispath => bindActionCreators({ closeConfirmacao, closeAndConfirm }, dispath)
export default connect(null, null)(ConfirmacaoPrioridadeModal)