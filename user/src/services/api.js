import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Menu items API
export const getMenuItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/menu`);
    return response.data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
    throw error;
  }
};

export const getMenuItemById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/menu/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching menu item with id ${id}:`, error);
    throw error;
  }
};

export const createMenuItem = async (menuItemData) => {
  try {
    const response = await axios.post(`${API_URL}/menu`, menuItemData);
    return response.data;
  } catch (error) {
    console.error('Error creating menu item:', error);
    throw error;
  }
};

export const updateMenuItem = async (id, menuItemData) => {
  try {
    const response = await axios.put(`${API_URL}/menu/${id}`, menuItemData);
    return response.data;
  } catch (error) {
    console.error(`Error updating menu item with id ${id}:`, error);
    throw error;
  }
};

export const deleteMenuItem = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/menu/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting menu item with id ${id}:`, error);
    throw error;
  }
};