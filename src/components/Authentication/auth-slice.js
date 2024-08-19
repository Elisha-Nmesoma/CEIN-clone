import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: null,
  credentials: { },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.payload, // Update isLoggedIn based on payload
      };
    default:
      return state;
  }
};

export const setUserLoggedIn = (isLoggedIn) => ({
  type: 'SET_USER_LOGGED_IN',
  payload: isLoggedIn,
});

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      return data.user; // Assuming the response contains user data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      return data.user; // Assuming the response contains user data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        if(action.error.message === 'Request failed with status code 404') {
          state.error = ' Access Denied! Invalid Credentials';
        }else{
          state.error = action.payload;
        }
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        if(action.error.message === 'Request failed with status code 404') {
          state.error = ' Access Denied! Invalid Credentials';
        }else{
          state.error = action.payload;
        }
      });
  },
});

export const authActions = authSlice.actions;
export default authSlice;
