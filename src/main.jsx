import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* strict mode checks for potential problems... checks for deprecated and unsafe life cycle */}
    <App />
  </StrictMode>,
)
