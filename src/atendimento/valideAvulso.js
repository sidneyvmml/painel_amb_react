const validate = values => {
    const errors = {}

    if (!values.nomePaciente) {
        errors.nomePaciente = 'Campo Obrigatório.'
    }

    if (!values.tipoAtendimento) {
        errors.tipoAtendimento = 'Campo Obrigatório.'
    }
    
    if (!values.prioridade) {
        errors.prioridade = 'Campo Obrigatório.'
    }

    return errors
}

export default validate
