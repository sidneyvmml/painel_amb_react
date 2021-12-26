import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field } from 'redux-form'
import If from '../utils/if'
import IconButton from '../common/template/iconButton'
import ConfirmacaoModal from '../modals/confirmacaoPrioridade/confirmacaoPrioridadeModal'
import { openConfirmacao } from '../modals/modalsActions'
import { saveSenha } from './atendimentoActions'

class AtendimentosLista extends Component {

    constructor(props) {
        super(props)
        this.state = { item: undefined, showModal: false }
    }

    showConfirmacao(item) {
        this.setState({ item, showModal: true })
    }

    confirmarChegada(prioridade) {
        this.hideConfirmacao()
        this.props.saveSenha(this.state.item, prioridade)
    }

    hideConfirmacao() {
        this.setState({ item: undefined, showModal: false })
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td>{item.PRONTUARIO}</td>
                <td>{item.NOME}</td>
                <td>{item.TIPO}</td>
                <td>{item.ESPECIALIDADE}</td>
                <td>
                    <IconButton style='primary' icon='check' onClick={() => this.showConfirmacao(item)}>
                    </IconButton>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div className="box-header">
                <fieldset>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Prontuário</th>
                                <th>Paciente</th>
                                <th>Tipo</th>
                                <th>Especialidade</th>
                                <th className="tableActions">Colocar na Fila</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
                <ConfirmacaoModal msg='O paciente será enviado para fila. Tem certeza disso?' acao={this.confirmarChegada.bind(this)}
                    cancel={this.hideConfirmacao.bind(this)} showModal={this.state.showModal} />
            </div>
        )
    }
}
const mapStateToProps = state => ({ retorno: state.modals.confirmacaoRetorno })
const mapDispathToProps = dispath => bindActionCreators({ openConfirmacao, saveSenha }, dispath)
export default connect(mapStateToProps, mapDispathToProps)(AtendimentosLista)
