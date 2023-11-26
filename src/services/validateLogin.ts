function verifyUsername(
  signUpUsername: string,
  loginUsername: string
): boolean {
  if (signUpUsername === loginUsername) {
    return true;
  }
  return false;
}

function verifyPassword(
  signUpPassword: string,
  loginPassword: string
): boolean {
  if (signUpPassword === loginPassword) {
    return true;
  }
  return false;
}

function validateLogin(
  signUpUsername: string,
  loginUsername: string,
  signUpPassword: string,
  loginPassword: string
): boolean {
  const isValidUsername = verifyUsername(signUpUsername, loginUsername);
  const isValidPassword = verifyPassword(signUpPassword, loginPassword);

  if (isValidUsername && isValidPassword) {
    return true;
  }
  return false;
}

export default validateLogin;
