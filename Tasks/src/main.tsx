import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App.tsx'
import './index.css'
import { Theme } from '@radix-ui/themes';
import { ThemeProvider, ThemeContext } from './shared/context/main.ts';
import { useContext } from 'react';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

const Main = () => {

  const themeContext = useContext(ThemeContext)


  const { theme } = themeContext

  return (
    <Theme appearance={theme}>
      <RouterProvider router={router} />
    </Theme>
  )

}


createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <Main />
  </ThemeProvider>
)