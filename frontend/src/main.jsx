import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import "virtual:windi.css";
import {SnackbarProvider} from 'notistack';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <SnackbarProvider>
  <App />
  </SnackbarProvider>
    
  </BrowserRouter>
);
