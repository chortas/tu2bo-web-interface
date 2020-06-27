import { create } from 'apisauce';

const api = create({
  baseURL: 'http://tu2bo-appserver.herokuapp.com/',
});

export const makePing = async () => {
  const response = await api.get('/ping');
  return response.ok ? 'Is up' : 'Is Down';
};
