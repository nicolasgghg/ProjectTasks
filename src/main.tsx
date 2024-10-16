import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App.tsx'
import './index.css'
import { Theme } from '@radix-ui/themes';
import { ThemeProvider, ThemeContext, UserProvider } from './shared/context/main.ts';
import { useContext } from 'react';
import { Login } from './pages/login/Login.tsx';
import { Register } from './pages/register/Register.tsx';
import { UserConfigurations } from './pages/userConfigurations/UserConfigurations.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/UserConfigurations",
    element: <UserConfigurations />
  },
  {
    path: "/*",
    element: <App />
  }
])

const Main = () => {

  const themeContext = useContext(ThemeContext)


  const { theme } = themeContext

  return (
    <Theme appearance={theme} accentColor="green" grayColor="mauve" radius="large">
      <RouterProvider router={router} />
    </Theme>
  )

}


createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <UserProvider>
      <Main />
    </UserProvider>
  </ThemeProvider>
)