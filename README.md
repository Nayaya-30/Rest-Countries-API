# REST Countries API — color theme switcher (Frontend Mentor)

This repository is my implementation of the "REST Countries API with color theme switcher" challenge. It is a React frontend that fetches country data, shows a responsive grid of country cards, provides a detail view with an interactive map, and supports a light/dark MUI theme toggle.

---

Table of contents

- [Overview](#overview)
- [Project features](#project-features)
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [How it works](#how-it-works)
- [What I learned](#what-i-learned)
- [Errors & troubleshooting](#errors--troubleshooting)
- [Continued development](#continued-development)
- [Author & acknowledgments](#author--acknowledgments)

---

## Overview

This project displays countries from the REST Countries API (or from local `data.json` if offline). Users can:

- Browse all countries (paginated / grid)
- Search countries with debounced input
- Filter by region
- Click a country to view details
- Click on the Flag on the country page to reveal the country map
- See and navigate to border countries
- Toggle light/dark theme (MUI)

The UI is responsive and aims to maintain accessible contrast in both themes.

---

## Project features

- Responsive homepage with search and region filter
- Country card grid with lazy-loaded flags and hover states
- Country detail page with:
  - Full info (population, region, capital, currencies, languages)
  - Interactive map using react-simple-maps
  - Quick links to border countries
- Global theme toggle (MUI createTheme) that persists user choice
- Redux Toolkit for state management and async fetches (createAsyncThunk)
- Loading and error states, skeletons for better UX
- Small animation touches via framer-motion
- Icons via react-icons

---

## Tech stack

- React (CRA or similar)
- Redux Toolkit (slices + createAsyncThunk)
- Material-UI (MUI v7) — theming & components
- react-simple-maps + d3-geo — map rendering & geographies
- framer-motion — transitions/animations
- react-router-dom — routing
- react-icons — icons
- node (for scripts), npm/yarn

---

## Quick start

Requirements: Node 16+ (or your project's node version), npm or yarn.

1. Clone repo
   git clone [https://github.com/Nayaya-30/Rest-Countries-API.git]

2. Install
   npm install
   or
   yarn

3. Run dev server
   npm start
   or
   yarn start

4. Build for production
   npm run build
   or
   yarn build

Notes:
- If the REST Countries API is down you can point the app to the bundled `data.json` for offline testing.

---

## Available scripts

- npm start — run dev server
- npm run build — production build
- npm test — run tests (if configured)
- npm run lint — linter (if configured)
- node scripts/* — helper scripts (e.g., fetch_leaders.js)

Adjust commands to yarn if you use yarn.

---

## Project structure (important files)

- src/
  - components/
    - home/ (SearchBar, FilterRegion, CountryGrid, CountryCard)
    - country/ (CountryDetail, CountryMap)
    - themeToggle/ThemeToggle.jsx
  - slices/ (redux slices: countriesSlice, themeToggleSlice, etc.)
  - utils/theme.js (MUI theme configuration using createTheme)
  - styles/ (global.css or similar)
  - App.jsx, index.jsx

---

## How it works (high level)

- The app fetches countries via an async Redux thunk (createAsyncThunk). Results are cached in Redux state.
- Theme switching is implemented with MUI's createTheme; a Redux slice stores dark/light selection and persists it to localStorage.
- Country detail accepts a country selection and uses react-simple-maps to compute a bounding box and center for zooming to the country.
- Search uses debouncing to avoid spamming API calls and filters the client-side list.
- Navigation handled with react-router; country detail paths are routable.

---

## What I learned

Key concepts and code snippets I used while building this project:

- Redux Toolkit async thunk
```javascript
// example slice async fetch
export const fetchCountries = createAsyncThunk('countries/fetchAll', async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  return res.json();
});
```

- MUI theming (createTheme + responsive typography)
```javascript
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: { mode: 'dark' },
  typography: { fontFamily: 'Roboto, sans-serif' }
});
```

- react-simple-maps + d3-geo: compute bounds & zoom
```jsx
const path = geoPath();
const bounds = path.bounds(feature);
```

- framer-motion for simple enter/exit animations:
```jsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
```

- Using react-icons for compact icon imports:
```jsx
import { FaSun, FaMoon } from 'react-icons/fa';
```

---

## Errors & troubleshooting (real issues encountered)

1. Peer dependency / version mismatches
   - Problem: react-simple-maps and some map/topojson packages expect certain React versions.
   - Fix: Align React and react-dom versions to the supported range; use package resolutions/overrides when necessary. Test locally after locking versions.

2. MUI style flash on theme change
   - Problem: brief flash when switching theme (FOUC)
   - Fix: persist theme to localStorage and hydrate before rendering (or wrap app with a theme-loading check) to avoid an initial wrong theme.

3. Map sizing / responsiveness
   - Problem: world map not keeping aspect / cropped on small screens.
   - Fix: use responsive container sizing (width:100%), compute height based on container, or use CSS aspect-ratio and adjust map projection/zoom dynamically.

4. CORS / API outages
   - Problem: REST Countries or external APIs can be unreliable.
   - Fix: provide a local `data.json` fallback and show a clear offline/error message.

5. Bundling large geo data
   - Problem: including large topojson/world-atlas in the bundle increases build size.
   - Fix: fetch geography files at runtime from CDN (used in this project) or lazy-load the map component.

---

## Continued development

Planned improvements:

- Add E2E tests (Cypress)
- Improve accessibility audits (axe)
- Implement PWA + offline caching
- Add pagination/infinite scroll for the country grid
- Server-side rendering for improved SEO (if required)

---

## Contributing

- Fork the repo, create a branch for your change, and open a pull request.
- Keep changes focused and add tests where possible.

---

## Author & acknowledgments

- Author: @Nayaya-30 / @usouff_
- Thanks to Frontend Mentor for the challenge and to maintainers of the libraries used.

License: MIT