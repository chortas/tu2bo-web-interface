import { create } from 'apisauce';

const api = create({
  baseURL: process.env.REACT_APP_AUTH_URI,
});

export const makePing = async () => {
  const response = await api.get('/ping');
  return response.ok ? 'Is up' : 'Is Down';
};

export const getStats = (date) => api.get('/stats', { date });

export const getUsers = () => api.get('/users');
