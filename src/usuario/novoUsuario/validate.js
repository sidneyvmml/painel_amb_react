const validate = values => {
  const errors = {}

  if (!values.nome) {
    errors.nome = 'Campo Obrigatório.'
  }

  if (!values.senha) {
    errors.senha = 'Campo Obrigatório.'
  } else if (values.senha.length < 6) {
    errors.senha = 'Senha deve ter, no mínimo, 6 caracteres.'
  }

  if (!values.senha2) {
    errors.senha2 = 'Campo Obrigatório.'
  } else if (values.senha != values.senha2) {
    errors.senha2 = 'As senhas digitadas não são iguais.'
  }

  if (!values.email) {
    errors.email = 'Campo Obrigatório.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Endereço de email inválido.'
  }

  if (!values.email2) {
    errors.email2 = 'Campo Obrigatório.'
  } else if (values.email != values.email2) {
    errors.email2 = 'Os emails digitados não são iguais.'
  }

  if (!values.telefone && !values.telefone2) {
    errors.telefone = 'Ao menos um telefone é obrigatório.'
  }
  
  if(values.telefone){
    if(values.telefone.length < 14 || values.telefone.length > 15){
      errors.telefone = "Formato inválido."
    }
  }

  if(values.telefone2){
    if(values.telefone2.length < 14 || values.telefone2.length > 15){
      errors.telefone2 = "Formato inválido."
    }
  }

  if (!values.bairro) {
    errors.bairro = 'Campo Obrigatório.'
  } 

  if (!values.endereco) {
    errors.endereco = 'Campo Obrigatório.'
  } 

  return errors
}

export default validate
