import { createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch }) => {
    // Simulate API call to authenticate user
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
    const data = await response.json();

    if (data.success) {
      dispatch(setLoginStatus(true));
      dispatch(setUser(data.user)); // Update user data if available
      return data.user; // Return user data if needed
    } else {
      throw new Error('Login failed!');
    }
  }
);
