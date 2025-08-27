// useLocalStorage.js
import { useState, useEffect } from "react";
import { storage } from "../utils/storage";

// React hook version with multi-tab sync
export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => storage.get(key, initialValue));

    // Save whenever state changes
    useEffect(() => {
        storage.set(key, value);
    }, [key, value]);

    // Sync across tabs
    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === key) {
                setValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, [key, initialValue]);

    return [value, setValue];
}
