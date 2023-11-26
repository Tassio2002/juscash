function validateTel(tel: string): boolean {
  const telRegex = /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/;
  const isValid = telRegex.test(tel);

  if (isValid) {
    return true;
  }
  return false;
}

export default validateTel;
