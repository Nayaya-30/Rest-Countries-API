import { useSelector } from "react-redux";
import { Stack, Typography } from "@mui/material";
import { Nav } from "../components/country/Nav.jsx";
import Border from "../components/country/Border.jsx";
import Details from "../components/country/Details.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { FaHome } from "react-icons/fa";

export const Countrypage = () => {
  const { id } = useParams();
  const countryList = useSelector((state) => state.country.data);
  const country = countryList.find((c) => c.cca3 === id);
  const navigate = useNavigate();
  const [lastBorder, setLastBorder] = useState([]);


  useMemo(() => {
    console.log(country.name.common && country.borders?.length > 0 ? country.borders : 'No borders');
  }, [country]);


  if (!country) return <p>Country not found.</p>;

  // const currentIndex = countryList.findIndex((c) => c.cca3 === id);

  function handlePrev() {
    if (lastBorder.length > 0) {
      navigate(`/country/${lastBorder[lastBorder.length - 1]}`);
      setLastBorder(prev => prev.slice(0, -1));
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

  
  return (
    <main style={{ maxHeight: "100vh" }}>
      <Stack direction="row" justifyContent="space-between" mb={4} px={20} py={8}>
        <Nav onClick={handlePrev} />
        <Nav text="Home" icon={<FaHome />} onClick={handleHome} />
      </Stack>

      <Stack direction={{ xs: "column", md: "row" }} spacing={16} px={20} py={4} alignItems="center">
        <img 
            src={country.flags.png}
            alt={country.name.common} 
            style={{ 
				width: "500px", 
				height: "350px", 
				borderRadius: 2, 
				boxShadow: '0 0 7px 2px rgba(0,0,0,0.3)'
			}} 
        />

        <Stack>
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
                {country.borders?.map((b) => (
					<Border 
						key={b} 
						border={b} 
						onClick={() => handleBorderClick(b)} 
					/> 
                ))}
            </span>
          </Stack> 
    </main>
  );
};