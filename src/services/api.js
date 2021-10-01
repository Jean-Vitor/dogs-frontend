import api from './config';

export const getDogService = (id) => api.get(`/dogs/${id}`);

export const getAllDogsService = () => api.get('/dogs');

export const addDogService = (data) => api.post('/dogs', data);

export const deleteDogService = (id) => api.delete(`/dogs/${id}`);

export const editDogService = (id, data) => api.put(`/dogs/${id}`, data);
