export const validateCredentials = (username, password) => {
  return username.trim() === 'admin' && password.trim() === 'admin';
};
