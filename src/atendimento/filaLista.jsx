import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field } from 'redux-form'
import If from '../utils/if'
import IconButton from '../common/template/iconButton'
import ConfirmacaoModal from '../modals/confirmacao/confirmacaoModal'
import { openConfirmacao } from '../modals/modalsActions'
import { saveSenha, atenderPaciente, chamarSenha } from './atendimentoActions'
import LocalAtendimentoModal from '../modals/localAtendimento/localAtendimentoModal'

class FilaLista extends Component {

    constructor(props) {
        super(props)
        this.state = { item: undefined, showModal: false, showModalLocalAtendimento: false, paciente: undefined, senhaId: undefined }
    }

    showConfirmacao(item) {
        this.setState({ item, showModal: true })
    }

    hideConfirmacao() {
        this.setState({ item: undefined, showModal: false })
    }

    atender(item) {
        this.props.atenderPaciente(this.state.item.id)
        this.hideConfirmacao()
    }

    showModalLocalAtendimento(item) {
        this.setState({ showModalLocalAtendimento: true, paciente: item.nome, senhaId: item.id })
    }

    hideModalLocalAtendimento() {
        this.setState({ showModalLocalAtendimento: false, paciente: undefined, senhaId: undefined })
    }

    chamarSenha(item) {
        this.props.chamarSenha(this.state.senhaId, this.state.paciente, item.descricao, item.descricao_falada)
        this.hideModalLocalAtendimento()
    }

    renderRows() {
        const list = this.props.list || []

        var stylePrioridade = {

        }

        var styleImg = {
            width: 50
        }

        return list.map((item, index) => (
            <tr key={index}>
                <td>{item.prontuario}</td>
                <td>{item.nome}</td>
                <td>{item.criado_em}</td>
                <td>{item.especialidade}</td>
                <td><img src={item.prioridade ? "sim.png" : ""} style={item.prioridade ? styleImg : {}} /></td>
                <td>

                    <IconButton style='primary' icon='volume-up' onClick={() => this.showModalLocalAtendimento(item)}>
                    </IconButton>

                    <IconButton style='danger' icon='window-minimize' onClick={() => this.showConfirmacao(item)}>
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
                                <th>Hora Chegada</th>
                                <th>Destino</th>
                                <th>Prioridade</th>
                                <th className="tableActions">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
                <ConfirmacaoModal msg='O paciente atendido será removido da fila. Tem certeza disso?' acao={this.atender.bind(this)}
                    cancel={this.hideConfirmacao.bind(this)} showModal={this.state.showModal} title="Atender Paciente" />
                <LocalAtendimentoModal cancel={this.hideModalLocalAtendimento.bind(this)} showModal={this.state.showModalLocalAtendimento}
                    acao={this.chamarSenha.bind(this)} />
            </div>
        )
    }
}
const mapStateToProps = state => ({ retorno: state.modals.confirmacaoRetorno })
const mapDispathToProps = dispath => bindActionCreators({ openConfirmacao, saveSenha, atenderPaciente, chamarSenha }, dispath)
export default connect(mapStateToProps, mapDispathToProps)(FilaLista)
