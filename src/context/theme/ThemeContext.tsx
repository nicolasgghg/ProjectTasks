import { createContext, useCallback, useEffect, useState } from "react";

interface ITheme {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  handleToggleTheme: () => void;
}

interface IChildrenTheme {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ITheme>({} as ITheme);

export const ThemeProvider: React.FC<IChildrenTheme> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme as "light" | "dark");
    }
  }, []);

  const handleToggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
