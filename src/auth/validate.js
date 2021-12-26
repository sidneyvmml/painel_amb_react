const validate = values => {

  const errors = {}

  // validate login
  if (values.loginMode) {
    if (!values.senha) {
      errors.senha = 'Informe a senha.'
    }

    if (!values.usuario) {
      errors.usuario = 'Informe o usuario.'
    }
  } else {
    if (!values.senha) {
      errors.senha = 'Informe a senha.'
    }

    if (!values.usuario) {
      errors.usuario = 'Informe o usuário.'
    }

    if (!values.nome) {
      errors.nome = 'Informe o nome.'
    }

    if (values.senha) {
      if (values.senha != values.senhaConfirmacao) {
        errors.senhaConfirmacao = 'As senhas digitadas não são iguais.'
      }
    }

  }

  return errors
}

export default validate
