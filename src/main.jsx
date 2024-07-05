import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import StateProvider from './components/state/UserState';
import './index.css'
import { ModalProvider } from './components/functions/ModalPopup';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
)
