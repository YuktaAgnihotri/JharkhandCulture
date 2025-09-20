import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const fetchPlaces = () => API.get('/api/places');
export const fetchPlaceById = (id) => API.get(`/api/places/${id}`);
export const fetchProducts = () => API.get('/api/products');
export const fetchProductById = (id) => API.get(`/api/products/${id}`);
export const fetchStories = () => API.get('/api/products');
export const fetchStoriesId = (id) => API.get(`/api/products/${id}`);