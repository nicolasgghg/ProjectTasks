import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Theme } from '@radix-ui/themes';


const router = createBrowserRouter([
  {
    path:"/", 
    element: <App />
  }
])


createRoot(document.getElementById('root')!).render(
  <Theme appearance='dark'>
    <RouterProvider router={router} />   
  </Theme>
    
)