const validate = values => {
    const errors = {}

    if (!values.senhaAtual) {
        errors.senhaAtual = 'Campo Obrigatório.'
    }
    
    if (!values.novaSenha) {
        errors.novaSenha = 'Campo Obrigatório.'
    } else if (values.novaSenha.length < 6) {
        errors.novaSenha = 'Senha deve ter, no mínimo, 6 caracteres'
    }

    if (!values.novaSenha2) {
        errors.novaSenha2 = 'Campo Obrigatório.'
    } else if (values.novaSenha != values.novaSenha2) {
        errors.novaSenha2 = 'As senhas digitadas não são iguais.'
    }

    return errors
    }

export default validate
