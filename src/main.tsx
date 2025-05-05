import { useContext } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import { App } from "./App";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { UserConfigurations } from "./pages/userConfigurations/UserConfigurations";
import "./index.css";

import { ThemeProvider, ThemeContext } from "./context/theme/ThemeContext";
import { UserProvider } from "./context/userContext/UserContext";
import { TaskProvider } from "./context/taskContext/TaskContext";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/userConfigurations", element: <UserConfigurations /> },
  { path: "/*", element: <App /> },
]);

const Main = () => {
  const themeContext = useContext(ThemeContext);

  const { theme } = themeContext;

  return (
    <Theme
      appearance={theme}
      accentColor="green"
      grayColor="mauve"
      radius="large"
    >
      <RouterProvider router={router} />
    </Theme>
  );
};

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <UserProvider>
      <TaskProvider>
        <Main />
      </TaskProvider>
    </UserProvider>
  </ThemeProvider>
);
