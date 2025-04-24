import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactFactsApp from './ReactFactsApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactFactsApp />
  </StrictMode>,
)
