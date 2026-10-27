import { UrheilijaProvider } from "./context/UrheilijaContext";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <UrheilijaProvider>
    <App />
  </UrheilijaProvider>,
)
