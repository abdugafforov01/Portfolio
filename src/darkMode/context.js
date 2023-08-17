import React, { useEffect } from "react";

import { createContext } from "react";
import { useState } from "react";

export const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
    const getTheme = () => {
        return JSON.parse(localStorage.getItem("theme")) || true
    }
    const[theme,setTheme] =useState(getTheme());
    useEffect(()=>{
        localStorage.setItem("theme",JSON.stringify(theme))
    },[theme])

    return (
        <DarkModeContext.Provider value={[theme, setTheme]}>
            {children}
        </DarkModeContext.Provider>
    )
}