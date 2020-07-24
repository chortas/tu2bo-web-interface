import { create } from 'apisauce';

const api = create({
  baseURL: process.env.REACT_APP_AUTH_URI,
  headers: { 'x-api-key': process.env.REACT_APP_AUTH_API_KEY },
});

export const makePing = async () => {
  const response = await api.get('/ping');
  return response.ok ? 'Is up' : 'Is Down';
};

export const getStats = (initialDate, finalDate) =>
  api.get('/stats', { initial_date: initialDate, final_date: finalDate });

export const getUsers = () => api.get('/users');

export const blockUser = (id) => api.post(`/users/${id}/blocked`);

export const unblockUser = (id) => api.delete(`/users/${id}/blocked`);
