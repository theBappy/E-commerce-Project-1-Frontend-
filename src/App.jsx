import React from 'react';
import './assets/styles/App.css';
import AppRoutes from './AppRoutes';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Initialize the Stripe instance with your publishable key
const stripePromise = loadStripe('pk_test_51QUqZtB9k7mttOuhLwRzabqHgpmLzQTjpgz17KwD8X1WsTGwNfCitkI2doEQm7Lu2oSuel7uyLmaTe6F2HyySl6M00QvxqomsD'); // Replace with your actual Stripe publishable key

const App = () => {
  return (
    <Elements stripe={stripePromise}> {/* Wrap everything inside Elements */}
      <div className="app-container">
    
        <main>
          {/* Rendering the routes */}
          <AppRoutes />
        </main>
      </div>
    </Elements>
  );
};

export default App;
