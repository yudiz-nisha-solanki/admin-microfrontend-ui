export function alertClass (status, close) {
  if (status) {
    return `sucess-alert ${!close ? 'alert' : 'alert-close'}`
  }
  return `fail-alert ${!close ? 'alert' : 'alert-close'}`
}

export function isNumber (value) {
  const numRex = /^[0-9\b]+$/
  if (numRex.test(value)) {
    return true
  }
  return false
}
  