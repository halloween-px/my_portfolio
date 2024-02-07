"use client"
import {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext({});

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('');

    const defaultValue = {
        theme, setTheme,
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            setTheme(localStorage.getItem("theme"))
        }
    })

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;