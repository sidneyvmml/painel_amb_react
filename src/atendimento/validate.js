const validate = values => {
  const errors = {}
  
  if (!values.nome) {
    errors.nome = 'Campo Obrigatório.'
  }

  if (!values.prontuario) {
    errors.prontuario = 'Campo Obrigatório.'
  }

  return errors
}

export default validate
