function validateConfirmPassword(
  password: string,
  confirmPassword: string
): boolean {
  if (password === confirmPassword) {
    return true;
  }
  return false;
}

export default validateConfirmPassword;
