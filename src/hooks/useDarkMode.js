// Usage
// const [theme, setTheme] = useDarkMode();
// <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle</button>

import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
    const [theme, setTheme] = useLocalStorage("theme", "light");
    const isDark = theme === "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const systemTheme = mq.matches ? "dark" : "light";
        if (!localStorage.getItem("theme")) {
            setTheme(systemTheme);
        }
    }, [setTheme]);

    return [theme, setTheme];
}