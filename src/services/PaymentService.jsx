import axios from 'axios';

// Set your base URL for the API
const API_URL = 'https://e-commerce-project1-backend.onrender.com/api/v1/orderpay'; 

/**
 * Create a payment intent on the backend
 * @param {Object} paymentData - Payment details to create the intent
 * @returns {Promise<Object>} - The response from the backend containing the clientSecret
 */
export const createPaymentIntent = async (paymentData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/create-intent`, paymentData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Usually, this will contain clientSecret
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error.response ? error.response.data : error;
  }
};

/**
 * Process the payment after the user confirms the payment
 * @param {Object} paymentInfo - Payment confirmation details from Stripe
 * @returns {Promise<Object>} - The response from the backend
 */
export const processPayment = async (paymentInfo) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${API_URL}/process-payment`, paymentInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error processing payment:', error);
    throw error.response ? error.response.data : error;
  }
};


