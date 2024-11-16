import axios from 'axios';

const API_URL = 'http://localhost:5000/contacts';

export const getContacts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const createContact = async (contact) => {
  try {
    const response = await axios.post(API_URL, contact);
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};

export const updateContact = async (id, contact) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, contact);
    return response.data;
  } catch (error) {
    console.error('Error updating contact:', error);
    throw error;
  }
};

export const deleteContact = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};
