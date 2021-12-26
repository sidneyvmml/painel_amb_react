import React, { Component } from 'react'
import AtendimentoAvulsoForm from './atendimentoAvulsoForm'
import { connect } from 'react-redux'
import { saveSenha } from './atendimentoActions'

class AtendimentoAvulso extends Component {

    handleSubmit(_values) {
        const values = {
            NOME: _values.nomePaciente.toUpperCase(),
            ESPECIALIDADE: _values.tipoAtendimento.toUpperCase(),
            PRIORIDADE: _values.prioridade
        }
        this.props.saveSenha(values)
    }

    render() {
        return (
            <div>
                <AtendimentoAvulsoForm onSubmit={this.handleSubmit.bind(this)} />
            </div>
        );
    }
}


export default connect(null, { saveSenha })(AtendimentoAvulso)