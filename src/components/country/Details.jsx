import { Stack, Typography } from "@mui/material";

const Details = ({ country }) => {
  if (!country) return null;

  return (
    <>
      <Typography variant="h3" mb={8}>
        {country.name.official}
      </Typography>
    
      <Stack direction={{ sm: "column", md: "row" }} spacing={10}> 

		{/* Left Column */}
        <Stack direction={'column'} spacing={1} minWidth={'35%'}>
          <Typography>
            <strong>Native Name:</strong> {country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}
          </Typography>
          <Typography>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </Typography>
          <Typography>
            <strong>Region:</strong> {country.region}
          </Typography>
          <Typography>
            <strong>Subregion:</strong> {country.subregion}
          </Typography>
          <Typography>
            <strong>Capital:</strong> {country.capital?.[0]}
          </Typography>
          <Typography>
            <strong>Calling Code:</strong>{' '}
			{country.idd
              ? `${country.idd.root}${country.idd.suffixes?.[0] || ""}`
              : "N/A"}
          </Typography>
          <Typography>
            <strong>Area:</strong> {country.area.toLocaleString()} km²
          </Typography>
        </Stack>

		{/* Right Column */}
        <Stack direction={"column"} spacing={1} maxWidth={'65%'}>
          <Typography>
            <strong>Top Level Domain:</strong> {country.tld?.[0]}
          </Typography>

          <Stack direction="row" spacing={1}>
            <Typography>
              <strong>{Object.keys(country.currencies).length > 1 ? "Currencies:" : "Currency:"}</strong>
            </Typography>
			<span 
				style={{ 
					display: 'inline-block',
				}}
			>
				{Object.values(country.currencies).map(c => (`${c.name} (${c.symbol})`)).join(", ")}
			</span>
          </Stack>
		
		<Stack direction="row" spacing={1}>
            <Typography>
            	<strong>{Object.keys(country.languages).length > 1 ? "Languages:" : "Language:"}</strong> 
            </Typography>
		    <span 
		  		style={{ 
					display: 'inline-block',
				}}
		    >
				{Object.values(country.languages).map(l => l).join(", ")}
			</span>
		</Stack>

          <Typography>
            <strong>Independence:</strong> {country.independent ? "Yes" : "No"}
          </Typography>
          <Typography>
            <strong>UN Member:</strong> {country.unMember ? "Yes" : "No"}
          </Typography>
		  <Typography>
            <strong>Landlocked:</strong> {country.landlocked ? "Yes" : "No"}
          </Typography>

		  <Stack direction="row" spacing={1}>
			<Typography>
				<strong>{country.timezones.length > 1 ? "Timezones:" : "Timezone:"}</strong> 
			</Typography>

			<span
				style={{ 
					display: 'inline-block',
				}}
			>
				{country.timezones.map(tz => tz).join(", ")}
			</span>
        </Stack>
      </Stack>
	  </Stack>
    </>
  );
};

export default Details;
