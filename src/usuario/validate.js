const validate = values => {

    const errors = {}

    if (values.senhaAtual || values.novaSenha || values.novaSenhaConfirmacao) {
        if (!values.senhaAtual) {
            errors.senhaAtual = 'Informe a senha atual.'
        }

        if (!values.novaSenha) {
            errors.novaSenha = 'Informe a nova senha.'
        }

        if (!values.novaSenhaConfirmacao) {
            errors.novaSenhaConfirmacao = 'Confirme a nova senha.'
        }
    }

    if (values.novaSenha && values.novaSenhaConfirmacao) {
      if (values.novaSenha != values.novaSenhaConfirmacao) {
        errors.novaSenhaConfirmacao = 'As senhas digitadas não são iguais.'
      }
    }

    if (!values.nome) {
        errors.nome = 'Informe o nome.'
    }

    return errors
}

export default validate
