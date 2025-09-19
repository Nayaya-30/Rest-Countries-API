import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { Nav } from "../components/country/Nav.jsx";
import Border from "../components/country/Border.jsx";
import Details from "../components/country/Details.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { FaHome } from "react-icons/fa";

export const Countrypage = () => {
  const { id } = useParams();
  const countryList = useSelector((state) => state.country.data);
  const country = countryList.find((c) => c.cca3 === id);

  const navigate = useNavigate();
  const [lastBorder, setLastBorder] = useState([]);
  const [hoveredBorder, setHoveredBorder] = useState(null);
  const [flipped, setFlipped] = useState(false);

  // Converting border ISO codes to country names
  const borderCountries = (country.borders ? country.borders : []).map((iso) => {
    const match = countryList.find((c) => c.cca3 === iso);
    return {
      iso,
      name: match ? match.name.common : iso, // fallback to ISO if no match
    };
  });
  // lazy load CountryMap component
  const CountryMap = lazy(() => import('./components/CountryMap'));

  function handlePrev() {
  if (lastBorder.length > 0) {
    const newBorders = [...lastBorder];
    const prev = newBorders.pop();
    setLastBorder(newBorders);
    navigate(`/country/${prev}`);
  } else {
    navigate(`/`);
  }
}

  function handleHome() {
    navigate(`/`);
  }

  function handleBorderClick(border) {
    setLastBorder(prev => [...prev, id]);
    navigate(`/country/${border}`);
  }

  function handleBorderHover(border) {
    setHoveredBorder(border);
  }

  function handleFlipped() {
    setFlipped(!flipped);
  }

  if (!country) {
    return (
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: "60vh", px: 2 }}
      >
        <Typography variant="h5" align="center" color="text.secondary">
          Country not found.
        </Typography>
      </Stack>
    );
  }
  
  return (
    <main className={'max-h-screen'}>
      <Stack 
        direction="row" 
        justifyContent="space-between" 
        mb={4} 
        px={20} 
        py={8}>
        <Nav onClick={handlePrev} />
        <Nav text="Home" icon={<FaHome />} onClick={handleHome} />
      </Stack>

      <Stack 
        direction={{ 
          xs: "column",
          md: "row" 
        }} 
        spacing={16} 
        px={20} 
        py={4} 
        alignItems="center"
      >
        <div 
          className={'perspective cursor-pointer fade-in-up animate ease-in-out delay-5'}
          onClick={handleFlipped}
        >
          <div 
          className={`relative duration-700 transform-style-preserve-3d 
            ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            <img 
              src={country.flags.png}
              alt={country.name.common} 
              style={{ 
                width: "600px", 
                height: "350px", 
                borderRadius: 2, 
                boxShadow: '0 0 7px 2px rgba(0,0,0,0.3)',
                backfaceVisibility: 'hidden',
                position: 'absolute',
              }}
            />

            <CountryMap 
              country={country} 
              borders={borderCountries.map(b => b.name) || []}
              hoveredBorder={hoveredBorder}
              onHover={setHoveredBorder}
            />
          </div>
        </div>

        <Stack className={'fade-in-down delay-5 ease-in-out'}>
          <Details country={country} />
        </Stack>
      </Stack>
      
	    <Stack direction="row" spacing={2} mt={4} px={20} py={4}>
        <Typography 
          variant="h6" 
          sx={{ 
            minWidth: 190 
          }}>
            <strong>{country.borders?.length > 0 ? country.borders?.length : 'No'} Border {country.borders?.length > 1 ? 'Countries' : 'Country'}:</strong>
        </Typography>

        <span
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: '4px',
          }}
        >
          {borderCountries.map((b) => (
            <Border 
                key={b.name} 
                border={b.name} 
                onClick={() => handleBorderClick(b.iso)} 
                onHover={() => handleBorderHover(b.name)}
            /> 
          ))}
        </span>
      </Stack> 
    </main>
  );
};