import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

import RouterApp from "./router/router.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>

            <RouterApp />

  </StrictMode>,
)
