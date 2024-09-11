import axios from 'axios';

const API_URL = 'http://localhost:3004';

const createTask = async (data) => {
  const token = localStorage.getItem('token'); 
  try {
    const response = await axios.post(`${API_URL}/tasks`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 201) {
      return { success: true, data: response.data };
    } else {
      return { success: false, error: response.data.error || 'Task creation failed' };
    }
  } catch (error) {
    console.error('Error during task creation:', error);
    return { success: false, error: error.response?.data?.error || 'Internal server error' };
  }
};

const getTasksByUserId = async () => {  
  const token = localStorage.getItem('token'); 
  try {
    const response = await axios.get(`${API_URL}/tasks/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return { success: false, error: error.response?.data?.error || 'Internal server error' };
  }
};

export default {
  createTask,
  getTasksByUserId,
};
