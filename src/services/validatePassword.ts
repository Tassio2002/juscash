function validatePassword(password: string): boolean {
  const hasMinimumLength = password.length >= 8;
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasNumericCharacter = /\d/.test(password);
  const hasAlphanumericCharacter = /[a-zA-Z]/.test(password);

  const isValidPassword =
    hasMinimumLength &&
    hasSpecialCharacter &&
    hasNumericCharacter &&
    hasAlphanumericCharacter;

  return isValidPassword;
}

export default validatePassword;
