import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import './index.css'

/**
 * Hlavní vstupní bod aplikace, spouštíme React ekosystém a výstup vložíme do elementu s ID "root"
 */
const root = document.getElementById('root');
createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);