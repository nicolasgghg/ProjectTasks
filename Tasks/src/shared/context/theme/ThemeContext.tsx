import { createContext, useCallback, useState } from "react";



interface ITheme {
    theme: 'light' | 'dark';
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
    handleToggleTheme: () => void; 
}

interface IChildrenTheme {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ITheme>({} as ITheme)

export const ThemeProvider: React.FC<IChildrenTheme> = ({ children }) =>{
    const [theme, setTheme] = useState<'light' | 'dark'>('dark');

    const handleToggleTheme = useCallback(()=>{
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    },[])

    return(
        <ThemeContext.Provider value={{theme, setTheme, handleToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}