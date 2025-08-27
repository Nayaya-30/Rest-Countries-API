import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    // Load from localStorage or system preference
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
            setDarkMode(saved === "dark");
        } else {
            setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    }, []);

    // Sync Tailwind + persist
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

export function useDarkMode() {
    const ctx = useContext(DarkModeContext);
    if (!ctx) throw new Error("useDarkMode must be used within DarkModeProvider");
    return ctx;
}