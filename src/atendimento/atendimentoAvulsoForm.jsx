import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput2'
import LabelAndSelect from '../common/form/labelAndSelect3'
import LabelAndSelect1 from '../common/form/labelAndSelect'
import If from '../utils/if'
import validate from './valideAvulso'
import { getTiposAtendimento } from './atendimentoActions'

class AtendimentoAvulsoForm extends Component {

    componentWillMount() {
        this.props.getTiposAtendimento()
    }

    render() {
        const { handleSubmit, tiposAtendimento } = this.props
        const simOuNao = [
            { id: 0, descricao: "Não" },
            { id: 1, descricao: "Sim" }
        ]

        return (
            <div>
                <form role="form" onSubmit={handleSubmit}>
                    <div className="box-body">
                        <Field name="nomePaciente" component={LabelAndInput} label="Nome do Paciente" />
                        <Field name="tipoAtendimento" component={LabelAndSelect} label="Tipo Atendimento" options={tiposAtendimento}
                            prompt="Selecione..." campo="descricao" />
                        <Field name="prioridade" component={LabelAndSelect1} label="Prioridade?" options={simOuNao}
                            prompt="Selecione..." campo="prioridade" />

                        <button type="submit" className="btn btn-primary" disabled={this.props.loading}>
                            <If visivel={this.props.loading}><i className="fa fa-spinner fa-spin"></i></If>
                            Enviar para Fila
                        </button>

                        <button type="button" className="btn" onClick={() => this.props.reset('atendimentoAvulsoForm')} disabled={this.props.pristine || this.props.submitting}>Limpar Campos</button>
                    </div>
                </form>
            </div>
        );
    }
}

AtendimentoAvulsoForm = reduxForm({
    form: 'atendimentoAvulsoForm',
    validate
})(AtendimentoAvulsoForm)
const mapStateToProps = state => ({
    tiposAtendimento: state.atendimento.tiposAtendimento
})
const mapDispathToProps = dispath => bindActionCreators({ getTiposAtendimento }, dispath)
export default connect(mapStateToProps, mapDispathToProps)(AtendimentoAvulsoForm)