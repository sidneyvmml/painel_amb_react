const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Informe o Email.'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Formato de email inválido.'
  }
  
  return errors
}

export default validate
