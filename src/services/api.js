import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Auth APIs
export const register = (userData) => axios.post(`${API_URL}/users/register`, userData);
export const login = (userData) => axios.post(`${API_URL}/users/login`, userData);

// Job Application APIs
export const getApplications = (token) =>
  axios.get(`${API_URL}/applications`, { headers: { Authorization: `Bearer ${token}` } });

export const addApplication = (application, token) =>
  axios.post(`${API_URL}/applications`, application, { headers: { Authorization: `Bearer ${token}` } });

export const updateApplication = (id, application, token) =>
  axios.put(`${API_URL}/applications/${id}`, application, { headers: { Authorization: `Bearer ${token}` } });

export const deleteApplication = (id, token) =>
  axios.delete(`${API_URL}/applications/${id}`, { headers: { Authorization: `Bearer ${token}` } });