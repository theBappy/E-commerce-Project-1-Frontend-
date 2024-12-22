import axios from 'axios';

const API_URL = 'https://e-commerce-project1-backend.onrender.com/api/v1/auth';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;  // Return the response data, typically token and user
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Registration failed');
    } else if (error.request) {
      throw new Error('No response from the server');
    } else {
      throw new Error(error.message || 'An error occurred during registration');
    }
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;  // Return the response data, typically token and user
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    } else if (error.request) {
      throw new Error('No response from the server');
    } else {
      throw new Error(error.message || 'An error occurred during login');
    }
  }
};

export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/profile`, {
      headers: { Authorization: `Bearer ${token}` },  // Corrected typo here
    });
    return response.data;  
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Failed to fetch profile');
    } else if (error.request) {
      throw new Error('No response from the server');
    } else {
      throw new Error(error.message || 'An error occurred while fetching the profile');
    }
  }
};

// New function to handle profile image upload
export const updateProfileImage = async (formData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/upload-profile-image`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',  // Set correct content-type for file upload
        Authorization: `Bearer ${token}`,      // Include token for authentication
      },
    });
    return response.data;  // Return the image URL from backend (Cloudinary URL)
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || 'Image upload failed');
    } else if (error.request) {
      throw new Error('No response from the server');
    } else {
      throw new Error(error.message || 'An error occurred while uploading image');
    }
  }
};

