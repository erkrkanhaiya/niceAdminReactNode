import React from 'react';
import { UserProvider } from './context/userState/userContext';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoute from './routes';
import { AuthProvider } from './context/auth/AuthContext';
import { RestaurantProvider } from './context/restaurant/restaurantContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <AuthProvider>
          <RestaurantProvider>
          <BaseRoute />
          </RestaurantProvider>
        </AuthProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
