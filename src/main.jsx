import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Toaster } from 'sonner'
import PlayerContextProvider from './contexts/PlayerContextProvider.jsx'
import GridContextProvider from './contexts/GridContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-center" duration={3000} richColors toastOptions={{ style: { fontFamily: 'Mona Sans' } }} />
    <BrowserRouter>
      <PlayerContextProvider>
        <GridContextProvider>
          <App />
        </GridContextProvider>
      </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
