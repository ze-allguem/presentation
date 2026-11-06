import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import WeberApp from './WeberApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {new URLSearchParams(window.location.search).get('deck') === 'argonautas' ? <App /> : <WeberApp />}
  </StrictMode>,
)
