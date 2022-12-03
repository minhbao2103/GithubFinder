import React from 'react'
import { useState,createContext } from 'react'
import '../../App.css'

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
    const [theme,setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    const valueTheme = {theme,toggleTheme}
  return (
        <ThemeContext.Provider value = {valueTheme}>
            {children}
        </ThemeContext.Provider>
  )
}


