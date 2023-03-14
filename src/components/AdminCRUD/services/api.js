import axios from 'axios';

axios.defaults.baseURL = 'https://640783688ee73db92e2b4ace.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post(`/materials`, values);
  return response.data;
};

export const getMaterial = async () => {
  const response = await axios.get('/materials');
  return response.data;
};
