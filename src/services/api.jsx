import axios from 'axios';

const API_URL = 'https://connections-api.goit.global';

export const registerUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, credentials);
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error.response ? error.response.data : error.message);
    throw error; // Aruncă eroarea pentru a fi gestionată în continuare
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    return user;
  } catch (error) {
    console.error('Login failed:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    await axios.post(`${API_URL}/users/logout`);
    localStorage.removeItem('token');
  } catch (error) {
    console.error('Logout failed:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const fetchCurrentUser = async () => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_URL}/users/current`, config);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch current user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const fetchContacts = async () => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(`${API_URL}/contacts`, config);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch contacts:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const addContact = async (contact) => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(`${API_URL}/contacts`, contact, config);
    return response.data;
  } catch (error) {
    console.error('Failed to add contact:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteContact = async (contactId) => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(`${API_URL}/contacts/${contactId}`, config);
  } catch (error) {
    console.error('Failed to delete contact:', error.response ? error.response.data : error.message);
    throw error;
  }
};
