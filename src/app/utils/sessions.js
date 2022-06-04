const getToken = () => {
  const token = localStorage.getItem('token');
  return token;
};

const clearSession = () => {
  localStorage.removeItem('session-status');
};

export { getToken, clearSession };
