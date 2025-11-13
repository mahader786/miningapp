import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { ToastProvider } from './contexts/ToastContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
   <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <ToastProvider>
      <App />
      </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
