// ThemeToggle.jsx
import React from "react";
import { Button } from "@mui/material";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./themeToggleSlice";


function ThemeToggle() {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <Button
            variant="outlined"
            aria-label="Toggle dark mode"
            color="text.primary"
            sx={{
                boxShadow: 2,
                textTransform: 'none',
            }}
            size="medium"
            startIcon={darkMode ? <FaMoon /> : <FaSun />}
            onClick={() => dispatch(toggleDarkMode())}
        >
            {darkMode ? "Dark Mode" : "Light Mode"}
        </Button>
    );
}

export default ThemeToggle;
