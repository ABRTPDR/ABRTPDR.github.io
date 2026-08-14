import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Global listener to disable right-click on specific elements
document.addEventListener('contextmenu', (e) => {
  const target = e.target as HTMLElement;
  
  // Check if the clicked element is an image, an SVG, or inside an SVG
  if (
    target.tagName === 'IMG' || 
    target.tagName.toUpperCase() === 'SVG' || 
    target.closest('svg')
  ) {
    e.preventDefault(); // This stops the right-click menu from appearing
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
