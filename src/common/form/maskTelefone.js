const maskTelefone = (value, previousValue) => {
  if (!value) {
    return value
  }
  const onlyNums = value.replace(/[^\d]/g, '')
  if (!previousValue || value.length > previousValue.length) {
    if (onlyNums.length === 2) {
      return '(' + onlyNums + ')'
    }
    if (onlyNums.length === 10) {
      return '('+ onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 6) + '-' + onlyNums.slice(6, 10)
    }
    if (onlyNums.length === 11) {
      return '('+ onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 7) + '-' + onlyNums.slice(7, 11)
    }
  }

  if (onlyNums.length <= 2) {
    return onlyNums
  }
  if (onlyNums.length <= 6) {
    return '('+ onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 6)
  }
  if (onlyNums.length <= 10) {
    return '('+ onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 6) + '-' + onlyNums.slice(6, 10)
  }
  if (onlyNums.length <= 11) {
    return '('+ onlyNums.slice(0, 2) + ') ' + onlyNums.slice(2, 7) + '-' + onlyNums.slice(7, 11)
  }
}

export default maskTelefone