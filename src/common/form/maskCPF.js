const maskTelefone = (value, previousValue) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (!previousValue || value.length > previousValue.length) {
    if (onlyNums.length === 3) {
      return onlyNums + '.'
    }
    if (onlyNums.length === 6) {
      return onlyNums.slice(0, 3) + '.' + onlyNums.slice(3, 6) + '.'
    }
    if (onlyNums.length === 9) {
      return onlyNums.slice(0, 3) + '.' + onlyNums.slice(3, 6) + '.' + onlyNums.slice(6, 9) + '-'
    }
    if (onlyNums.length === 11) {
      return onlyNums.slice(0, 3) + '.' + onlyNums.slice(3, 6) + '.' + onlyNums.slice(6, 9) + '-' + onlyNums.slice(9, 11)
    }
  }

  if (onlyNums.length <= 3) {
    return onlyNums
  }
  if (onlyNums.length <= 6) {
    return onlyNums.slice(0, 3) + '.' + onlyNums.slice(3, 6)
  }
  if (onlyNums.length <= 9) {
    return onlyNums.slice(0, 3) + '.' + onlyNums.slice(3, 6) + '.' + onlyNums.slice(6, 9)
  }
  if (onlyNums.length <= 11) {
     return onlyNums.slice(0, 3) + '.' + onlyNums.slice(3, 6) + '.' + onlyNums.slice(6, 9) + '-' + onlyNums.slice(9, 11)
  }
}

export default maskTelefone