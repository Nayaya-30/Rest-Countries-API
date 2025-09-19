import React from "react";
import { lightTheme, darkTheme } from "./utils/theme.js";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import { Countrypage } from "./pages/Countrypage.jsx";
import { Homepage } from "./pages/Homepage.jsx";
import Heading from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/styles/animations.css'

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <main>
          <Heading />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/country/:id" element={<Countrypage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
