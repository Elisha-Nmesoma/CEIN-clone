import React from 'react';
import App from './App'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import { ModalProvider } from './components/functions/ModalPopup';
import { Provider } from 'react-redux';
import store from './components/Authentication/reduxStore'
import { AuthProvider } from './components/auth/authContex';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Provider store={store}>
          <ModalProvider>
            <App />
          </ModalProvider>
        </Provider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
)
