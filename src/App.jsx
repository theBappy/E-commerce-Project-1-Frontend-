import React from 'react';
import './assets/styles/App.css';
import AppRoutes from './AppRoutes';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY); 

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
