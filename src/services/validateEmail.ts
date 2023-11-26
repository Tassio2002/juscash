function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = emailRegex.test(email);

  if (isValid) {
    return true;
  }
  return false;
}

export default validateEmail;
