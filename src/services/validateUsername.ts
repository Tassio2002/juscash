function validateUsername(username: string): boolean {
  if (username.length >= 3) {
    return true;
  }
  return false;
}

export default validateUsername;
