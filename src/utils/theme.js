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

// Light Theme - Soft Modern
export const lightTheme = createTheme({
  spacing,
  palette: {
    mode: "light",
    border: { main: "#FF6B6B" }, // coral accent
    bgcolor: {
      body: "#F8F9FA", // soft pearl white background
      elements: "#E9ECEF", // gentle gray-blue panels
    },
    text: {
      primary: "#212529", // rich charcoal
      secondary: "#6C757D", // sophisticated gray
    },
    primary: {
      main: "#4DABF7", // vibrant sky blue
      light: "#74C0FC",
      dark: "#339AF0",
    },
    secondary: {
      main: "#FF922B", // warm orange
      light: "#FFA94D",
      dark: "#F76707",
    },
    success: {
      main: "#51CF66", // fresh mint
      light: "#69DB7C",
      dark: "#37B24D",
    },
  },
  typography,
});

// Dark Theme - Cosmic Night
export const darkTheme = createTheme({
  spacing,
  palette: {
    mode: "dark",
    border: { main: "#845EF7" }, // ethereal purple accent
    bgcolor: {
      body: "#161B22", // deep space background
      elements: "#21262D", // midnight slate panels
    },
    text: {
      primary: "#F8F9FA", // crisp white
      secondary: "#ADB5BD", // platinum gray
    },
    primary: {
      main: "#5C7CFA", // electric indigo
      light: "#748FFC",
      dark: "#4C6EF5",
    },
    secondary: {
      main: "#BE4BDB", // mystical purple
      light: "#DA77F2",
      dark: "#9C36B5",
    },
    success: {
      main: "#20C997", // aquamarine
      light: "#38D9A9",
      dark: "#12B886",
    },
  },
  typography,
});
