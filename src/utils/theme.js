import { createTheme } from "@mui/material/styles";

// Shared typography
const spacing = (factor) => `${0.25 * factor}rem`;
const typography = {
    fontFamily: ["Nunito", "sans"].join(","),
    fontSize: 16,
    h1: { fontSize: "3.75rem", lineHeight: 1 },
    h2: { fontSize: "3rem", lineHeight: 1 },
    h3: { fontSize: "2.25rem", lineHeight: "2.5rem" },
    h4: { fontSize: "1.875rem", lineHeight: "2.25rem" },
    h5: { fontSize: "1.5rem", lineHeight: "2rem" },
    h6: { fontSize: "1.25rem", lineHeight: "1.75rem" },
    body1: { fontSize: "1rem", lineHeight: "1.5rem" },
    body2: { fontSize: "0.875rem", lineHeight: "1.25rem" },
    caption: { fontSize: "0.75rem", lineHeight: "1rem" },
};

// Light Theme
export const lightTheme = createTheme({
    spacing,
    palette: {
        mode: "light",
        border: { main: "#2563eb" }, // blue-600
        bgcolor: {
            body: "#f9fafb", // gray-50
            elements: "#9ca3af", // gray-400
        },
        text: {
            primary: "#030712", // gray-950
            secondary: "#4b5563", // gray-600
        },
    },
    typography,
});

// Dark Theme
export const darkTheme = createTheme({
    cssThemeVariables: true, // still valid, but requires CssVarsProvider
    spacing,
    palette: {
        mode: "dark",
        border: { main: "#2563eb" }, // blue-600
        bgcolor: {
            body: "#172554", // blue-950
            elements: "#1e3a8a", // blue-900
        },
        text: {
            primary: "#f3f4f6", // gray-100
            secondary: "#9ca3af", // gray-400
        },
    },
    typography,
});