const maskDinheiro = (value, previousValue) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (!previousValue || value.length > previousValue.length) {
    if (onlyNums.length === 1) {
      return 'R$ ' + onlyNums
    }
  }

  if (onlyNums.length > 1) {
    return 'R$ ' + onlyNums
  }
}

export default maskDinheiro