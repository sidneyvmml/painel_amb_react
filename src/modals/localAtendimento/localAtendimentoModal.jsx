import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLocaisAtendimentos } from '../../localAtendimento/localAtendimentoActions'
import IconButton from '../../common/template/iconButton'

class LocalAtendimentoModal extends Component {

    componentWillMount() {
        this.props.getLocaisAtendimentos()
    }


    renderRows() {
        const list = this.props.locaisAtendimentos || []
        if (list.length > 0) {
            return list.map((item, index) => (
                <tr key={index}>
                    <td>
                        {item.descricao}
                    </td>
                    <td>
                        <IconButton type="button" style='primary' icon='check' onClick={() => this.props.acao(item)}>
                        </IconButton>
                    </td>
                </tr>
            ))
        }
        return (
            <tr>
                {'Vazio.'}
            </tr>
        )

    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={() => this.props.cancel()}>
                <Modal.Header closeButton>
                    <Modal.Title>Selecione o local de atendimento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th className="tableActions">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </Modal.Body>
            </Modal>
        );
    }
}
const mapStateToProps = state => ({
    locaisAtendimentos: state.localAtendimento.lista
})
export default connect(mapStateToProps, { getLocaisAtendimentos })(LocalAtendimentoModal)